const root_elem = document.querySelector('#root');


{
    const data = [
        'https://artworld.ru/images/cms/content/catalog2/kartina_v_interier_pejzazh_maslom_v_lesnoj_tishi_ki200106.jpg',
        'https://ar.culture.ru/attachments/attachment/preview/5d318a999679aa1b2cd218f6-preview.jpg',
        'https://oir.mobi/uploads/posts/2021-05/1622284149_33-oir_mobi-p-prostoi-peizazh-priroda-krasivo-foto-38.jpg',
        'https://fotogora.ru/img/blog/big/2019/12/3/15987.jpg',
        'https://artworld.ru/images/cms/content/catalog2/kartina_v_interier_pejzazh_maslom_rannej_vesnoj_v_lesu_ki200102.jpg'
    ]

    const gallery_container = document.createElement('div');
    gallery_container.classList.add('gallery_container');

    const content_elem = document.createElement('img');
    content_elem.classList.add('content');

    const trigger_container = document.createElement('div');
    trigger_container.classList.add('trigger_container');

    const img_arr = data.map(elem => {
        const element = document.createElement('img');
        element.src = elem;
        element.addEventListener('click', ()=>{
            content_elem.src = elem;
        })
        return element
    });
    img_arr[0].click();


    trigger_container.append(...img_arr);

    gallery_container.append(content_elem, trigger_container);
    root_elem.append(gallery_container);

}
