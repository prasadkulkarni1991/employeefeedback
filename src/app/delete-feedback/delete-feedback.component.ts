import { Component, EventEmitter, Output } from '@angular/core';
declare var $: any;
@Component({
    selector: 'app-delete-feedback',
    templateUrl: './delete-feedback.component.html'
})

export class DeleteFeedbackComponent {
    employeeName;
    index;
    @Output() messageEvent = new EventEmitter<string>();
    showModal(): void {
        $('#myModal').modal('show');
    }
    deleteData(employee, index): void {
        this.messageEvent.emit(index);
        this.hideModal();
    }
    hideModal(): void {
        document.getElementById('close-modal').click();
    }
    openModal(data, index) {
        this.employeeName = data;
        this.index = index;
        $('#myModal').modal('show');
    }
}
