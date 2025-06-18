window.onload = () => {
  // your existing JS code here

  let currentUser = null;

// UI elements (add these IDs in HTML)
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const streakCounter = document.getElementById('streakCount');
const completeBtn = document.getElementById('completeBtn');

// Sign in
loginBtn.onclick = () => {
  firebase.auth().signInWithPopup(provider).then(result => {
    currentUser = result.user;
    loadUserData();
  });
};

// Sign out
logoutBtn.onclick = () => {
  firebase.auth().signOut().then(() => {
    currentUser = null;
    streakCounter.textContent = '0';
  });
};

// Load Firestore streak
function loadUserData() {
  const docRef = db.collection('users').doc(currentUser.uid);
  docRef.get().then(doc => {
    if (doc.exists) {
      streakCounter.textContent = doc.data().streak || 0;
    } else {
      docRef.set({ streak: 0 });
    }
  });
}

// Mark today as complete
completeBtn.onclick = () => {
  if (!currentUser) return alert("Please login first");
  const docRef = db.collection('users').doc(currentUser.uid);
  docRef.get().then(doc => {
    let currentStreak = doc.data().streak || 0;
    docRef.set({ streak: currentStreak + 1 }).then(() => {
      streakCounter.textContent = currentStreak + 1;
      alert("🎉 Day complete! Great job, Senpai!");
    });
  });
};
};


