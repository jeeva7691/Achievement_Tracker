import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  achievementForm!: FormGroup;
  selectedFiles: File[] = [];
  showPopup: boolean = false;

  constructor(
    private fb: FormBuilder,
    private achievementService: ApiService,
    // public dialogRef: MatDialogRef<FormsComponent>
  ) {
    this.createForm();
  }

  createForm() {
    this.achievementForm = this.fb.group({
      date: ['', Validators.required],
      description: ['', Validators.required],
      reason: ['', Validators.required],
      attachments: [''] // Store file information separately
    });
  }

  onFileChange(event: any) {
    this.selectedFiles = Array.from(event.target.files);
  }

  onSubmit() {
    if (this.achievementForm.valid) {
      const formData = new FormData();
      formData.append('date', this.achievementForm.get('date')?.value);
      formData.append('description', this.achievementForm.get('description')?.value);
      formData.append('reason', this.achievementForm.get('reason')?.value);

      this.selectedFiles.forEach(file => {
        formData.append('attachments', file, file.name);
        console.log('formData',formData)
      });

      this.achievementService.addAchievement(formData).subscribe(() => {
        // this.dialogRef.close(true); // Close dialog and indicate success
      });
    }
  }

  openAddAchievementPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }
}
