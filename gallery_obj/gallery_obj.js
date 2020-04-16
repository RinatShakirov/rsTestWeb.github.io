class Gallery{

    constructor(firstImg,btnImg1,btnImg2,btnImg3,btnImg4,namePro,contentPro,linkPro,classImg,classBtnImg){

        this.firstImg = firstImg;
        this.btnImg1 = btnImg1;
        this.btnImg2 = btnImg2;
        this.btnImg3 = btnImg3;
        this.btnImg4 = btnImg4;
        this.namePro = namePro;
        this.contentPro = contentPro;
        this.linkPro = linkPro;
        this.classImg = classImg;
        this.classBtnImg = classBtnImg;
        
    }

    blockGallery(){

        let blockGall = '';
        
            blockGall = `
            <div class="gallery-slider-inner">
                <h1>${this.namePro}</h1>
                <div class="project-bild">
                    <div class="bild-project">
                        <img class="bottom-bild-btn ${this.classBtnImg}" src="${this.btnImg1}.png" alt="">
                        <img class="bottom-bild-btn ${this.classBtnImg}" src="${this.btnImg2}.png" alt="">
                        <img class="bottom-bild-btn ${this.classBtnImg}" src="${this.btnImg3}.png" alt="">
                        <img class="bottom-bild-btn ${this.classBtnImg}" src="${this.btnImg4}.png" alt="">
                    </div>
                    <div class="top-bild-wrapp">
                        <img class="top-bild-show ${this.classImg}" src="${this.firstImg}.png" alt="">
                    </div>
                </div>
                <div class="inform">
                    <div class="text-pro">
                        <p>${this.contentPro}</p>
                        <a href="${this.linkPro}" target="_blank">More Information</a>
                    </div>
                </div>
            </div>
        `;
        gallerySlider.innerHTML += blockGall;
    };
};

let portfolioProject = new Gallery(
/* */    './images/test-1/test-1',
/* */    './images/test-1/test-1-1',
/* */    './images/test-1/test-1-2',
/* */    './images/test-1/test-1-3',
/* */    './images/test-1/test-1-4',
/* */    'test-1',
/* */     test_1,
/* */    'https://rinatshakirov.github.io/test-2.github.io/',
/* */   'topA',
/* */   'smallA',
);
portfolioProject.blockGallery();

let aveShopProject = new Gallery(
/* */    './images/test-2/test-2',
/* */    './images/test-2/test-2-1',
/* */    './images/test-2/test-2-2',
/* */    './images/test-2/test-2-3',
/* */    './images/test-2/test-2-4',
/* */    'test-2',
/* */     test_2,
/* */    'https://rinatshakirov.github.io/test-3.github.io/',
/* */   'topB',
/* */   'smallB',
);
aveShopProject.blockGallery();

let testProject_3 = new Gallery(
/* */    './images/test-3/test-3-5',
/* */    './images/test-3/test-3-1',
/* */    './images/test-3/test-3-2',
/* */    './images/test-3/test-3-3',
/* */    './images/test-3/test-3-4',
/* */    'test-3',
/* */     test_3,
/* */    '',
/* */   'topC',
/* */   'smallC',
);
testProject_3.blockGallery();

let testProgect_4 = new Gallery(
/* */    './images/test-4/test-4-5',
/* */    './images/test-4/test-4-1',
/* */    './images/test-4/test-4-2',
/* */    './images/test-4/test-4-3',
/* */    './images/test-4/test-4-4',
/* */    'test-4',
/* */     test_4,
/* */    'https://rinatshakirov.github.io/test-5.github.io/',
/* */   'topE',
/* */   'smallE',
); 
testProgect_4.blockGallery();