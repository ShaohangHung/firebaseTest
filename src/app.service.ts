import { Injectable } from '@nestjs/common';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: 'AIzaSyDB5nKbcLS5E8Icy0xUBlHdbAXmKi1g3Kw',
      authDomain: 'test-86cb2.firebaseapp.com',
      projectId: 'test-86cb2',
      storageBucket: 'test-86cb2.appspot.com',
      messagingSenderId: '233250629885',
      appId: '1:233250629885:web:9ef4b8b8ff30a19ef6b694',
      measurementId: 'G-Z8MTHEB3X5',
    };

    // Initialize Firebase
    const firebaseApp = initializeApp(firebaseConfig);
    const messaging = getMessaging(firebaseApp);

    const token = await getToken(messaging);
    console.log(token);

    return 'Hello World!';
  }
}
