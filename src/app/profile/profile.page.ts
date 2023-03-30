import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userProfile: any = {};

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private firestore: AngularFirestore
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getUserProfile();
  }

  async getUserProfile() {
    //show loader
    let loader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    loader.present();

    try {
      const useremaillocalstore = localStorage.getItem('useremail');
      this.firestore
        .collection("userdetails", (ref) => ref.where("email", "==", useremaillocalstore))
        .snapshotChanges()
        .subscribe((data: any) => {
          if (data.length > 0) {
            const e = data[0];
            this.userProfile = {
              id: e.payload.doc.id,
              fullname: e.payload.doc.data()["fullname"],
              email: e.payload.doc.data()["email"],
              phoneno: e.payload.doc.data()["phonenum"],
              houseunit: e.payload.doc.data()["houseunit"],
              fathers: e.payload.doc.data()["fathers"],
              mothers: e.payload.doc.data()["mothers"],
              birthday: e.payload.doc.data()["birthday"],
            };
            console.log(this.userProfile)
          } else {
            this.userProfile = null; // No matching document found
          }

          loader.dismiss();
        });

    } catch (e: any) {
      this.showToast(e);
    }
  }

  showToast(message: string) {
    this.toastCtrl.create({
      message: message,
      duration: 3000
    }).then(toastData => toastData.present());
  }
}