// Assuming idsData is accessible through import or direct inclusion here

const idsData = {
    "Producers": ["Nj6967", "Xr4717", "Cq6161", "If6944", "Ia2361", "Bm1332", "Db2118", "Xh9228", "Kq4195", "Sh7588", "Dv4182", "Ev6897", "Ia6588", "Mk2297", "So7851", "Kb8832", "Fh2121", "Vd5491", "Nq9811", "Kg1989", "Lx9676", "Bm2724", "Rj8198", "Fy6677", "Yd1162", "Xf6141", "Mu6196", "In4558", "Rz9865", "Sy3986", "Wp8158", "Sh2397", "Fi5138", "As3842", "Ml9178", "Ne3684", "Ke7616", "Bn4938", "Nq3527", "Ug3272", "Bm5536", "Cx4765", "Vc8721", "Qe5878", "Ru9862", "Om1476", "Bi5729", "If7597", "Ib4495", "Mx1827", "Ua7442", "Ud1846", "Ah8119", "Ns2115", "Lu3936", "Xr5514", "Jt5136", "Om1841", "Ng1622", "Xy2643", "Xq4723", "Wg9266", "Se2194", "Hd5611", "Np1681", "Xm1113", "Vn7832", "Bz4969", "Av8295", "Up6582", "Dh5471", "Bd4413", "Vl9279", "Dq4813", "Kx8319", "Ej3278", "Ay6525", "Qu7337", "To9425", "De3679", "Xw7343", "Zh1148", "Ma9577", "Ag8784", "Pe6992", "Ck4483", "Yy5373", "Dw3978", "Tq2856", "Jq3138", "Hb6237", "As3974", "Zo9667", "Nl5676", "Fz1146", "Es7274", "Td4714", "Vl8156", "Hm3369", "Eu6441"],
    "Consumers": ["Bo4545", "Gd5868", "Fo5881", "Bv1611", "Ng8511", "Qr5478", "Iw6186", "Xa2389", "Ac2713", "Ze2111", "Ks3728", "Iu6393", "Mt2533", "Yt8178", "Iv3945", "Uz1721", "Vg4878", "It4273", "Mj3477", "Wf1423", "Zl8575", "Wv8352", "Sa5355", "Nv9548", "Np1211", "Wg7985", "Vy9888", "Ky6842", "Re2651", "Vm7111", "Cn4144", "Eq3567", "Bw7276", "Ww5251", "Wr8343", "Zy7411", "Wj6286", "Rw6317", "Cb3899", "Lm5247", "Ap4137", "Gk3951", "Iz3788", "Us9581", "Sw9318", "Bi9387", "Hn2624", "Li5873", "Ha5243", "Nx5411", "Qz2914", "We3317", "Cx5262", "Ks5336", "Si8847", "Ww1311", "Pm1389", "Mj6927", "Fx6722", "Do3221", "Pz9564", "Kw9187", "Yw9398", "Dk9919", "Pf3816", "Pw3556", "Xj3414", "Si3545", "Du6753", "Xb1816", "Av8376", "Xn5377", "Hf7148", "Xn3116", "Ro2477", "Dk6685", "Fm9334", "Tf8746", "Xs7551", "Uz2456", "Wr8475", "Rw5535", "Fj3158", "Wy4857", "Wa9319", "Ku2234", "Xp1366", "Yr2575", "Bh4316", "Cu9682", "Xm5558", "Tt4421", "Gq6596", "Py5324", "Bn3675", "It5388", "Dn7838", "Kh2389", "Ty3719", "Ht5318"],
    "Suppliers": ["Uc7486", "Pv9532", "Mw1431", "Mt9222", "Zh4787", "Ja5467", "Xo7564", "Ky8643", "Ig3684", "Af7315", "Fe4552", "Ev2333", "Ag6244", "Aj6959", "Ps2139", "Xu1345", "Br2639", "Uf3932", "Rz7595", "Gw7391", "Ig4174", "Kr9824", "Ym7832", "Bd9876", "Dm4621", "Xo8649", "Qn4513", "Ld3652", "Sl1334", "Sn7465", "Yc4981", "Cr9569", "St1596", "Ip9246", "Go1922", "Ln3166", "Jr4819", "Tx2395", "Kx5729", "Xf4679", "Dr3199", "Kc3188", "Dn5377", "Zt8853", "Tn7612", "Ej2951", "Ly3243", "Ev4789", "Xr6711", "Xn4793", "Sf6146", "Hi6524", "Sb6771", "Jz5121", "Og1623", "Yk7589", "Sv5647", "Xz6461", "Jx8844", "Hv9862", "Lu2552", "Bk6847", "Hw8911", "Oy6471", "Yv5435", "Rz7298", "Ss6363", "Lh5584", "Ym9891", "Es9436", "Kh8246", "Tj6427", "Xu7547", "Vk9133", "Ac1726", "Fl4869", "Eo3788", "Lf1274", "Ea4368", "Ll9792", "Ly1882", "Wp3369", "Rr7773", "Mm9676", "Vh3349", "Zb3129", "Oy5848", "Yc4146", "Gn2421", "Zz5526", "Mt6396", "Qe2475", "Sp6574", "Cl5257", "Ov1859", "Jx4587", "Of2838", "Ic1585", "Uq5896", "Hm4788"]
  };


  function selectRole(role) {
    const userID = localStorage.getItem("userID"); // Retrieve the user ID from localStorage
  
    if (!userID) {
      document.getElementById("error-message").textContent = "No User ID found. Please return to the homepage.";
      return;
    }
  
    if (role === 'producer') {
      if (idsData.Producers.includes(userID)) {
        window.location.href = "Producer_1.html";
      } else {
        document.getElementById("error-message").textContent = "The ID is not registered as a Producer.";
      }
    } else if (role === 'buyer') {
      if (idsData.Consumers.includes(userID) || idsData.Producers.includes(userID)) {
        window.location.href = "Consumer_1.html";
      } else {
        document.getElementById("error-message").textContent = "The ID is not registered as a Buyer.";
      }
    }
    
  }
  
  