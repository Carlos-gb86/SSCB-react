export function getMaxProfileHeightVMVN(r1, r2, r3, w1, w2, w3, D, b) {
    if (b > D) {
      return 0;
    } else {
      w1 = (Math.PI / 180) * 0.5 * w1;
      const w1s = (Math.PI / 2) - w1;
      w3 = (Math.PI / 180) * 0.5 * w3;
      const w3s = (Math.PI / 2) - w3;
  
      r1 = r1 - 0.02;
      r2 = r2 - 0.02;
      r3 = r3 - 0.02;
  
      b = b / 2;
      D = D / 2;
  
      const Dr = D - r2;
  
      const theta = Math.acos((b - Dr) / r2);
      const alpha = Math.asin(b / r1);
      const beta = Math.asin(b / r3);
  
      let h1, h2;
  
      if (b >= Dr + r2 * Math.cos(w1s)) {
        h1 = r2 * Math.sin(theta);
        h2 = r2 * Math.sin(theta);
      } else if (b >= Dr + r2 * Math.cos(w3s)) {
        h1 = r1 * (Math.cos(alpha) - Math.cos(w1)) + r2 * Math.sin(w1s);
        h2 = r2 * Math.sin(theta);
      } else {
        h1 = r1 * (Math.cos(alpha) - Math.cos(w1)) + r2 * Math.sin(w1s);
        h2 = r3 * (Math.cos(beta) - Math.cos(w3)) + r2 * Math.sin(w3s);
      }
  
      return h1 + h2;
    }
  }

  export function getMaxProfileHeightVRVT(r1, r2, r3, w1, w2, w3, D, b) {
    if (b > D) {
      return 0;
    } else {
      w1 = (Math.PI / 180) * 0.5 * w1;
      let w1s = w1 - Math.PI / 2;
      w2 = (Math.PI / 180) * w2;
      w3 = (Math.PI / 180) * 0.5 * w3;
  
      let delta = 0.02;
  
      r1 = r1 - delta;
      r2 = r2 - delta;
      r3 = r3 - delta;
  
      D = D / 2;
      b = b / 2;
  
      let Dr = r1 - r2;
  
      let theta = Math.acos(b / r1);
      let alpha = Math.acos((b - Dr * Math.cos(w1s)) / r2);
      let beta = Math.asin(b / r3);
  
      let hp = Math.cos(w3) * (r3 - r2 - (Dr * Math.sin(w1s)) / Math.cos(w3));
  
      let h1 = r1 * Math.sin(theta);
  
      let h2;
      if (b >= r1 * Math.cos(w1s)) {
        h2 = r1 * Math.sin(theta);
      } else if (b >= r3 * Math.sin(w3)) {
        h2 = Dr * Math.sin(w1s) + r2 * Math.sin(alpha);
      } else {
        h2 = r3 * Math.cos(beta) - hp;
      }
  
      return h1 + h2;
    }
  }

  export function getMaxProfileHeightVC(r, b) {
    r = r - 0.02;
  
    if (b > 2 * r) {
      return 0;
    } else {
      b = b / 2;
      let theta = Math.acos(b / r);
      return 2 * r * Math.sin(theta);
    }
  }
  