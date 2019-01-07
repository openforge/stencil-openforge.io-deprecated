export class BrowserService {
  check_webp() {
    const kTestImages = {
      lossy: 'UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA',
      lossless: 'UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==',
      alpha:
        'UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==',
      animation:
        'UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA',
    };
    const img = new Image();
    img.onload = function() {
      const result = img.width > 0 && img.height > 0;
      const allowWebp = String(result);
      localStorage.setItem('allowWebp', allowWebp);
    };
    img.onerror = function() {
      const allowWebp = 'false';
      localStorage.setItem('allowWebp', allowWebp);
    };
    img.src = `data:image/webp;base64,${kTestImages['lossy']}`;
  }
}
