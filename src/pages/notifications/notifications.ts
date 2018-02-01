import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FacebookService } from './../../services/facebook.service';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
  providers: [FacebookService]
})
export class NotificationsPage {
  public posts: Observable<any[]>;

  constructor(public navCtrl: NavController,
              public facebookService: FacebookService) {

    this.posts = this.facebookService
      .getPosts('WarwickEconomicsSummit')
      .map(data => data.map(this.mapPosts));
  }

  // Pipe dates
  mapPosts = (post) => {
   return {
     from: post.from,
     time: post.created_time * 1000, // convert to milliseconds
     message: post.message,
     photos: this.getPhotos(post)
   };
 }

 // filter photos
 getPhotos = (post) => {
   if (!post.attachments)
     return [];

   let attachments = post.attachments.data[0].subattachments ||
                     post.attachments;

   return attachments.data
     .filter(x => x.type == "photo")
     .map(x => x.media.image);
 }
}
