import { Component } from '@angular/core';

interface Feedback {
  studentName: string;
  batchNo: number;
  feedback: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  feedbackList: Feedback[] = [];
  studentName: string = '';
  batchNo: number | null = null;
  feedback: string = '';

  onSubmit() {
    if (this.studentName && this.batchNo !== null && this.feedback) {
      const newFeedback: Feedback = {
        studentName: this.studentName,
        batchNo: this.batchNo,
        feedback: this.feedback
      };

      this.feedbackList.push(newFeedback);
      this.clearForm();
    }
  }

  clearForm() {
    this.studentName = '';
    this.batchNo = null;
    this.feedback = '';
  }
}
