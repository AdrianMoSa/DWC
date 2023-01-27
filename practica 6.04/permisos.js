//He dejado los permisos que vienen por defecto en la aplicación porque no se si se dejan estos o los de por defecto.

// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /Productos/{document=**} {
//       allow read: if true;
//       allow create: if request.auth != null && request.auth.uid == userId ;
//       allow delete: if request.auth != null && request.auth.uid == userId && get(/databases/$(database)/documents/Usuario/ $(request.auth.uid)).data.rol == "admin"; 
//     }
//     match /Usuarios/{document=**}{
//      allow update: if get(/databases/$(database)/documents/Usuario/ $(request.auth.uid)).data.rol == "admin"; 
//     }
//   }
// }