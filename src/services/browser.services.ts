export class BrowserService {
  // Right now, this method can only check for lossy webp capabilities. The rest of the code for serving the proper .webp images is scattered throughout the site and is based on a boolean "allowWebp". Some refactoring later could potentially support lossless, alpha, and animation. At the time of this writing, 01-08-19, the only .webp images in the website assets are lossy.
  check_webp(isServer) {
    const kTestImages = {
      lossy: 'UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA',
      lossless: 'UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==',
      alpha: 'UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==',
      animation: 'UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA',
    };
    const img = new Image();
    img.onload = function() {
      const result = img.width > 0 && img.height > 0;
      console.log(result);
      const allowWebp = String(result);
      if (!isServer) {
        localStorage.setItem('allowWebp', allowWebp);
      }
    };
    img.onerror = function() {
      const allowWebp = 'false';
      if (!isServer) {
        localStorage.setItem('allowWebp', allowWebp);
      }
    };
    img.src = `data:image/webp;base64,${kTestImages['lossy']}`;
  }
}
