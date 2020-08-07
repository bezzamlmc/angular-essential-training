import { Component } from '@angular/core';

// NOTE from LMC: nane can be used in the html document
// Same with the wasWatched method
@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {
  name = 'The Redemption';
  wasWatched() {
    return true;
  }
}
