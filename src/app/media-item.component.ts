import { Component, Input, Output, EventEmitter } from '@angular/core';

// NOTE from LMC: nane can be used in the html document
// Same with the wasWatched method
@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {
  @Input() mediaItem;
  @Output() delete = new EventEmitter();

  onDelete() {
    console.log('deleted');
    this.delete.emit(this.mediaItem);
  }
}
