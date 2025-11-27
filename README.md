# Fake TikTok React Clone  
A mini TikTok clone built with **ReactJS**, featuring vertical video scrolling, auto-play, swipe navigation, interactive sidebar, search hashtags, share popup, and more — similar to the actual TikTok app UI/UX.

---

##  Features

###  1. TikTok UI Clone  
- Top navigation bar (Following | For You)  
- Bottom navigation bar with TikTok-style **Create button**  
- Vertical video feed with scroll-snap behavior  
- Avatar, like, comment, save, share, mute, spinning record icons  
- Left description area with hashtags  

---

###  2. Auto Play / Pause (Intersection Observer)
Videos automatically **play when visible** and **pause when out of view**, using the IntersectionObserver API.

---

###  3. Swipe Navigation  
- **Swipe up** → next video  
- **Swipe down** → previous video  
- Works with mouse drag (desktop)

---

###  4. Save Button → Copy URL  
Clicking “Save” automatically copies the video's URL to clipboard.

---

###  5. Video Info Overlay (TikTok-style)  
When scrolling or pressing the **→ arrow key**, a floating popup appears showing:  
- Username  
- Sound name  
- Likes & Comments  
Popup **auto hides after 2.5 seconds**.

---

###  6. Share Popup  
Click “Share” → opens a popup with options:  
- Facebook  
- Instagram  
- Threads  
Can be closed with an “X” button.

---

###  7. Search Hashtag  
Click the search icon →  
Type a hashtag →  
Press Enter →  
**Only videos containing that hashtag appear.**

---

###  8. 100% Responsive  
The entire app is displayed inside a phone-frame to simulate a mobile TikTok experience.

---

##  How to Run

### 1. Install dependencies  
npm install

### 2. Start development server  
npm start

### 3. Build for production  
npm run build

---

##  Technologies Used

- ReactJS  
- JavaScript ES6  
- CSS3  
- FontAwesome  
- IntersectionObserver API  
- Clipboard API  
- Mouse & Keyboard event handling  

---

##  Demo Videos Used  
All videos located under `/src/videos/`  
- video1.mp4  
- video2.mp4  
- video3.mp4  
- video4.mp4  

(You can replace them with your own TikTok-style clips.)

---






