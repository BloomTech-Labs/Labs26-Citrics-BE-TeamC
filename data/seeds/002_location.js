exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('location').del()
    .then(function () {
      // Inserts seed entries
      return knex('location').insert([
        {
          location:
            `Alpharetta, GA`
          ,
          image: 'https://photos.zillowstatic.com/fp/0af1292e73388799f9461bfc53f8ffc7-cc_ft_768.jpg'
        },
        {
          location:
            `Atlanta, GA`
          ,
          image: 'https://photos.zillowstatic.com/fp/1b48a110528811cba126feed2f9109a4-cc_ft_768.jpg'
        },
        {
          location:
            `Brookhaven, GA`
          ,
          image: 'https://photos.zillowstatic.com/fp/c5929429dd3d1ffad8d04855e506b816-cc_ft_768.jpg'
        },
        {
          location:
            `Johns Creek, GA`
          ,
          image: 'https://photos.zillowstatic.com/fp/f90bf8c823b26d718c5b8e8d7bea3298-cc_ft_768.jpg'
        },
        {
          location:
            `Marietta, GA`
          ,
          image: 'https://photos.zillowstatic.com/fp/6fe2bfbbd89cecf7aa04c305ac61a841-cc_ft_768.jpg'
        },
        {
          location:
            `Roswell, GA`
          ,
          image: 'https://photos.zillowstatic.com/fp/db0f9741d8c935c9b202fdc4fe642230-cc_ft_768.jpg'
        },
        {
          location:
            `Sandy Springs, GA`
          ,
          image: 'https://photos.zillowstatic.com/fp/5473ef6b736c44747ecb0d5ca6ee2756-cc_ft_768.jpg'
        },
        {
          location:
            `Savannah, GA`
          ,
          image: 'https://photos.zillowstatic.com/fp/3aa943e2d99651d8a065b430a4cf0303-cc_ft_768.jpg'
        },
        {
          location:
            `Smyrna, GA`
          ,
          image: 'https://photos.zillowstatic.com/fp/e81d8c8d7bf3a2e8bb2cacd6932fc514-cc_ft_768.jpg'
        },
        {
          location:
            `South Fulton, GA`
          ,
          image: 'https://photos.zillowstatic.com/cc_ft_1536/ISbdcnrtdgfe2a0000000000.jpg'
        },
        {
          location:
            `Stonecrest, GA`
          ,
          image: 'https://photos.zillowstatic.com/fp/dc42a7117c8754db90d226ca54e8d40d-p_h.jpg'
        },
        {
          location:
            `Valdosta, GA`
          ,
          image: 'https://photos.zillowstatic.com/fp/925249a1e82cba5cdc39456222d4bf2f-cc_ft_768.jpg'
        },
        {
          location:
            `Warner Robins, GA`
          ,
          image: 'https://photos.zillowstatic.com/fp/54b1426194cb1f39019d68a2d531f496-cc_ft_768.jpg'
        },
        {
          location:
            `Allentown, PA`
          ,
          image: 'https://photos.zillowstatic.com/fp/23e6a1a5dfab09b6acb1ca61a21b4a6d-cc_ft_768.jpg'
        },
        {
          location:
            `Bethlehem, PA`
          ,
          image: 'https://photos.zillowstatic.com/fp/f97d3b1fa7ecad0e2ba205ec31863a9c-cc_ft_768.jpg'
        },
        {
          location:
            `Erie, PA`
          ,
          image: 'https://photos.zillowstatic.com/fp/c77dee117e6b104f06c3b46b269a0ad6-cc_ft_768.jpg'
        },
        {
          location:
            `Harrisburg, PA`
          ,
          image: 'https://photos.zillowstatic.com/fp/b9a07d373f05616ad3bab44fd5ed04d5-cc_ft_768.jpg'
        },
        {
          location:
            `Philadelphia, PA`
          ,
          image: 'https://photos.zillowstatic.com/fp/3ad16d0f0bd5f9f6b39cc6a0747e344a-cc_ft_768.jpg'
        },
        {
          location:
            `Pittsburgh, PA`
          ,
          image: 'https://photos.zillowstatic.com/fp/27e9d77d115547e5a548a92ba026cc99-cc_ft_768.jpg'
        },
        {
          location:
            `Reading, PA`
          ,
          image: 'https://photos.zillowstatic.com/fp/78c79b089aaae6a6ab86044af7f70efe-cc_ft_768.jpg'
        },
        {
          location:
            `Scranton, PA`
          ,
          image: 'https://photos.zillowstatic.com/fp/3db62214dda2121a8bcf312f2ad59742-cc_ft_768.jpg'
        },
        {
          location:
            `Allen, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/d59761b1ba0a51bdac8ddfb44e0eb3aa-cc_ft_768.jpg'
        },
        {
          location:
            `Amarillo, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/bc54ca6a02c6164ac6b01a5551bcd8d2-cc_ft_768.jpg'
        },
        {
          location:
            `Arlington, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/0a985b5871e9da3ad2de3478ca9897f4-cc_ft_768.jpg'
        },
        {
          location:
            `Austin, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/5b40dd1fb55429d6a04c3a106fc1319e-cc_ft_768.jpg'
        },
        {
          location:
            `Baytown, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/1245f8212cf91258217dfeebd3006c8f-cc_ft_768.jpg'
        },
        {
          location:
            `Brownsville, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/36785a4efed4aaf16415f3fe33f3444a-cc_ft_768.jpg'
        },
        {
          location:
            `Bryan, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/cc3e88de616962964a6827b607232592-cc_ft_768.jpg'
        },
        {
          location:
            `Carrollton, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/e4584319b18e37f7575c426568312f1d-cc_ft_768.jpg'
        },
        {
          location:
            `Cedar Park, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/b32e6190cbee3ed5c6b7f95428aee1c5-cc_ft_768.jpg'
        },
        {
          location:
            `College Station, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/affb1ea31c5742a9f08a6410a9616ce6-cc_ft_768.jpg'
        },
        {
          location:
            `Conroe, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/7b87622ad5cfd86bc289b638b4ef840f-cc_ft_768.jpg'
        },
        {
          location:
            `Corpus Christi, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/80a21d60120b399da936a1bc42b23864-cc_ft_768.jpg'
        },
        {
          location:
            `Dallas, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/661161b13b9e76ec84b22060c5ad4757-cc_ft_768.jpg'
        },
        {
          location:
            `DeSoto, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/b0b4bb1df2f52213152de87d346b8f4f-cc_ft_768.jpg'
        },
        {
          location:
            `Denton, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/9af79044ad720fa96238c8a7b9631bbe-cc_ft_768.jpg'
        },
        {
          location:
            `Edinburg, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/4d03e8522d30fb22ea999092dadca732-cc_ft_768.jpg'
        },
        {
          location:
            `El Paso, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/64d347b3b4a79dee8de91ffa4d9c10fd-cc_ft_768.jpg'
        },
        {
          location:
            `Euless, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/a45f3749179af667233fa838b02ad20c-cc_ft_768.jpg'
        },
        {
          location:
            `Fort Worth, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/33fd0e16ee56ff5db92e076b3a555989-cc_ft_768.jpg'
        },
        {
          location:
            `Frisco, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/0dcd498cc1d84f17441c3f84d3935e27-cc_ft_768.jpg'
        },
        {
          location:
            `Galveston, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/e507e9c6930d20a8832697a897541a00-cc_ft_768.jpg'
        },
        {
          location:
            `Garland, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/61ce0ab8a166425312347284c07f2f84-cc_ft_768.jpg'
        },
        {
          location:
            `Georgetown, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/6000c64f6b89367dceeb89f2b7efd925-cc_ft_768.jpg'
        },
        {
          location:
            `Grand Prairie, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/f2be20b32af305dae6642d9c991a066d-cc_ft_768.jpg'
        },
        {
          location:
            `Grapevine, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/b0f31dbec9045676b6e21aac98c7be2c-cc_ft_768.jpg'
        },
        {
          location:
            `Harlingen, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/6672bff275ef0754a9a8577677db4312-cc_ft_768.jpg'
        },
        {
          location:
            `Houston, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/31a0ea1a030533c8738d7c5c2fed20fb-cc_ft_768.jpg'
        },
        {
          location:
            `Irving, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/7dfb43409add7f0682db2cd3024e2cae-cc_ft_768.jpg'
        },
        {
          location:
            `Killeen, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/e34ceb4b90030e83a9ad65732c83790e-cc_ft_768.jpg'
        },
        {
          location:
            `Laredo, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/a1ca453f86cca9245bc03f0459428324-cc_ft_768.jpg'
        },
        {
          location:
            `League City, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/21b03570d69c279c34acb15c32ccb495-cc_ft_768.jpg'
        },
        {
          location:
            `Leander, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/b792d005b13d2cc5bc36f28b6aa0714b-cc_ft_768.jpg'
        },
        {
          location:
            `Lewisville, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/c48342fa83c3bbf5ae9630d7f9f260ec-cc_ft_768.jpg'
        },
        {
          location:
            `Little Elm, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/65f7ee8f06d9d35d9d51a78f0e3a69c4-cc_ft_768.jpg'
        },
        {
          location:
            `Longview, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/b1b0cd7fc0748a27727ff8586ce586df-cc_ft_768.jpg'
        },
        {
          location:
            `Lubbock, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/615e8ba057af09a9c559636fa03ee363-cc_ft_768.jpg'
        },
        {
          location:
            `Mansfield, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/77ee5fc9720a6a0cf83ade227000c33d-cc_ft_768.jpg'
        },
        {
          location:
            `McAllen, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/37e7ffa8d99d75ebac60a6930404983d-cc_ft_768.jpg'
        },
        {
          location:
            `McKinney, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/66b8444252eb4061fbcf2e8690f79224-cc_ft_768.jpg'
        },
        {
          location:
            `Mesquite, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/17bbb75384a9d91195176456e685e657-cc_ft_768.jpg'
        },
        {
          location:
            `Midland, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/3342de4303ab9a623f8eef48ae03789d-cc_ft_768.jpg'
        },
        {
          location:
            `Mission, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/b4c47514d68781f138f25f17805fded9-cc_ft_768.jpg'
        },
        {
          location:
            `Missouri City, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/c1acf9cbfd16ca4e8e1009529ef5bda7-cc_ft_768.jpg'
        },
        {
          location:
            `New Braunfels, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/bac961aa30b70239e540afb2fe480b0b-cc_ft_768.jpg'
        },
        {
          location:
            `North Richland Hills, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/b035edb7abf99dabf5073e339624775b-cc_ft_768.jpg'
        },
        {
          location:
            `Pasadena, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/85cf692e6c5a71c8ab59b5b4e84a1100-cc_ft_768.jpg'
        },
        {
          location:
            `Pflugerville, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/6c4643a9aa8dd992dabf03e36f3217f2-cc_ft_768.jpg'
        },
        {
          location:
            `Pharr, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/1f069d57173fd1a07cac8b5ddd6c1693-cc_ft_768.jpg'
        },
        {
          location:
            `Plano, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/368bb645aafc03afa7e9db9955352930-cc_ft_768.jpg'
        },
        {
          location:
            `Port Arthur, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/87fe2f21ab3f8d8132f919f0e3130922-cc_ft_768.jpg'
        },
        {
          location:
            `Richardson, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/71e32366c9f0f3608894aa325d821e50-cc_ft_768.jpg'
        },
        {
          location:
            `Round Rock, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/f4f0ededddab1c55233833fd59ac7433-cc_ft_768.jpg'
        },
        {
          location:
            `Rowlett, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/431e7d2d8e390350f4494315d82b0eff-cc_ft_768.jpg'
        },
        {
          location:
            `San Angelo, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/7cd255f41e6ec1c0a8c480d9145458ff-cc_ft_768.jpg'
        },
        {
          location:
            `San Antonio, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/8655d08743ae753cf8a25de219e19556-cc_ft_768.jpg'
        },
        {
          location:
            `Sugar Land, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/7f2706e8f02b93346b21e5f1f1bf689a-cc_ft_768.jpg'
        },
        {
          location:
            `Temple, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/d69c491b0583d7654ca2100c648bb04a-cc_ft_768.jpg'
        },
        {
          location:
            `Texas City, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/092dcd23cbfa899917d9afcc21296944-cc_ft_768.jpg'
        },
        {
          location:
            `Tyler, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/a5f5d5bb5e8386d17672752ee1d09131-cc_ft_768.jpg'
        },
        {
          location:
            `Victoria, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/d9aba1d4cc992d78932903d7e42219fc-cc_ft_768.jpg'
        },
        {
          location:
            `Waco, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/0571d9e8873fc06a515564e5df046564-cc_ft_768.jpg'
        },
        {
          location:
            `Wichita Falls, TX`
          ,
          image: 'https://photos.zillowstatic.com/fp/65e62a0223e8450de424078ce859e0c7-cc_ft_768.jpg'
        },
        {
          location:
            `Alameda, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/5fc4f7a8a70a2db354e2644d8e18dcbc-cc_ft_768.jpg'
        },
        {
          location:
            `Alhambra, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/27013dd41fc2cac7a4039943720e81a7-cc_ft_768.jpg'
        },
        {
          location:
            `Aliso Viejo, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/926d911302dcc3b16218d854e85dd65e-cc_ft_768.jpg'
        },
        {
          location:
            `Anaheim, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/1b9bc81eb63171ac8082c80e7cbe586a-cc_ft_768.jpg'
        },
        {
          location:
            `Antioch, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/b65e337e54d0b1631b65ae40dde4156e-cc_ft_768.jpg'
        },
        {
          location:
            `Arcadia, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/7123489ea8cc2915bf2faa6a5fdc629e-cc_ft_768.jpg'
        },
        {
          location:
            `Bakersfield, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/c642220f48b6a63e4c8ea5c5a2e81f47-cc_ft_768.jpg'
        },
        {
          location:
            `Baldwin Park, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/e7fd62058d2f43db2d41bb6e6cc8c21c-cc_ft_768.jpg'
        },
        {
          location:
            `Bellflower, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/97dccea1748fb6814a866765f0ecfdf1-cc_ft_768.jpg'
        },
        {
          location:
            `Berkeley, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/95b3b8dd4b72eb71ce53ebe246bf0dcc-cc_ft_768.jpg'
        },
        {
          location:
            `Brentwood, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/75f3cf42c7c1b71c6835e79b6d2df202-cc_ft_768.jpg'
        },
        {
          location:
            `Buena Park, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/8ef6bd5ea494c4fd9ba237f4ffa9b5b9-cc_ft_768.jpg'
        },
        {
          location:
            `Burbank, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/e7ec04e3588f3cdddb4a1cde88de6463-cc_ft_768.jpg'
        },
        {
          location:
            `Camarillo, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/6fd4510ce7e6bbab7213b4800f3f4026-cc_ft_768.jpg'
        },
        {
          location:
            `Carlsbad, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/d0285679dab0d5fdc30bf07943fe3bbb-cc_ft_768.jpg'
        },
        {
          location:
            `Carson, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/071f5a27bb7c70c466542a735987f084-cc_ft_768.jpg'
        },
        {
          location:
            `Cathedral City, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/2bb1d17b9ae7ea6dc88cb190f9d22c07-cc_ft_768.jpg'
        },
        {
          location:
            `Chico, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/ae23fe910d557ce2a22fce1aa8d6f287-cc_ft_768.jpg'
        },
        {
          location:
            `Chino Hills, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/5330409a303ea1d8761f8d9857bea48b-cc_ft_768.jpg'
        },
        {
          location:
            `Chino, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/9cfaf3bb998043f3f5b87cd6a36008f9-cc_ft_768.jpg'
        },
        {
          location:
            `Chula Vista, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/ca2694439f0aee3c0fc362c6f6a21da9-cc_ft_768.jpg'
        },
        {
          location:
            `Citrus Heights, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/722b921023e9e7c3cfb532e2cde79cfd-cc_ft_768.jpg'
        },
        {
          location:
            `Clovis, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/81c704c671ef324a44f69fbdd2786544-cc_ft_768.jpg'
        },
        {
          location:
            `Colton, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/0b42bd14495455a32c1c5c9610d273d5-cc_ft_768.jpg'
        },
        {
          location:
            `Concord, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/fedefdde6b0db604e18129eb8ebc3b99-cc_ft_768.jpg'
        },
        {
          location:
            `Corona, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/e0a5bc8d8c9d86f8bd4d23b87b68a5e8-cc_ft_768.jpg'
        },
        {
          location:
            `Costa Mesa, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/cecceee4276bfa3124413032adcf8fa2-cc_ft_768.jpg'
        },
        {
          location:
            `Cupertino, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/823ddfc411e3e323d3626793136fec2d-cc_ft_768.jpg'
        },
        {
          location:
            `Daly City, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/09de51aa552175ad3341af1921d59dfb-cc_ft_768.jpg'
        },
        {
          location:
            `Davis, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/b089e3d6297aa2d07a8b8798e748a1ae-cc_ft_768.jpg'
        },
        {
          location:
            `Delano, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/54bc78c9c2a346b22d0f161f6951b512-cc_ft_768.jpg'
        },
        {
          location:
            `Diamond Bar, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/98ef05cdf796619b0ad0b3a2a12c3e44-cc_ft_768.jpg'
        },
        {
          location:
            `Downey, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/309410bcc40b9389d6699a625b198993-cc_ft_768.jpg'
        },
        {
          location:
            `Dublin, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/04819a688b8a07e2ffab6eda8732ead9-cc_ft_768.jpg'
        },
        {
          location:
            `Eastvale, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/4a432e3e6a8c61c39cfabe93c9e7c70c-cc_ft_768.jpg'
        },

        {
          location:
            `El Cajon, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/21b2bd31a36d1660357d1002c3f0a27a-cc_ft_768.jpg'
        },
        {
          location:
            `El Monte, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/b76aa5cdb04958bc01c763cf5e517f28-cc_ft_768.jpg'
        },
        {
          location:
            `Elk Grove, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/2c1f1aa1bed69a5dbaf03a3e6b09e40b-cc_ft_768.jpg'
        },
        {
          location:
            `Encinitas, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/6048d775d273ea4978c809e362ed63f4-cc_ft_768.jpg'
        },
        {
          location:
            `Escondido, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/c369a2b147068ee7cc99ac8c795a55ce-cc_ft_768.jpg'
        },


        {
          location:
            `Fairfield, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/bb20dd64f7c78ea0cfc1c9c2fb7fd3dc-cc_ft_768.jpg'
        },
        {
          location:
            `Folsom, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/71fe8bcfdb7233db2138a8d74604dda6-cc_ft_768.jpg'
        },
        {
          location:
            `Fontana, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/b6533eb5e72701dabefda5d03f6de910-cc_ft_768.jpg'
        },
        {
          location:
            `Fountain Valley, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/87acb8bbaa5e8e755eb13098b8c01ffc-cc_ft_768.jpg'
        },
        {
          location:
            `Fremont, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/864f112441107fd41e4fcec45fde3b77-cc_ft_768.jpg'
        },


        {
          location:
            `Fresno, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/22a544e11f369b0953370ec63e2a5651-cc_ft_768.jpg'
        },
        {
          location:
            `Fullerton, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/3d3d4ab628d819c8d96cf157ee98d182-cc_ft_768.jpg'
        },
        {
          location:
            `Gardena, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/bacdcda837f5eafc9df5193c4ab70fd0-cc_ft_768.jpg'
        },
        {
          location:
            `Gilroy, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/84aa7ec2dd943396e684051f40d9fcef-cc_ft_768.jpg'
        },
        {
          location:
            `Glendora, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/f41d397016db61d8e9774f85b49883ef-cc_ft_768.jpg'
        },


        {
          location:
            `Hanford, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/0fb13c330c0c7b369ad1f5fb6d334dbd-cc_ft_768.jpg'
        },
        {
          location:
            `Hawthorne, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/4706de9ceef06b57d6349496426b4c87-cc_ft_768.jpg'
        },
        {
          location:
            `Hayward, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/f51394c41d2a1a42ef85961ad7d07207-cc_ft_768.jpg'
        },
        {
          location:
            `Hemet, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/bf9614498f48f11d0efe6d74571feed8-cc_ft_768.jpg'
        },
        {
          location:
            `Hesperia, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/48eb884ef3e1ab0fe6697db8d60d6301-cc_ft_768.jpg'
        },


        {
          location:
            `Highland, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/7ec95d252d21d9d406f6eee32d956427-cc_ft_768.jpg'
        },
        {
          location:
            `Huntington Beach, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/28e46000aae59b5e3ab45b1d5bbed241-cc_ft_768.jpg'
        },
        {
          location:
            `Huntington Park, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/706570a2b110990c82c667378eb0537c-cc_ft_768.jpg'
        },
        {
          location:
            `Indio, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/dba5f3690c06dbfb790eac48c0b30cd8-cc_ft_768.jpg'
        },
        {
          location:
            `Inglewood, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/4704f3e09a9bc144d809ff8d38ba8a32-cc_ft_768.jpg'
        },


        {
          location:
            `Irvine, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/215dbb0bd81b828d49d76a8fe8baedd5-cc_ft_768.jpg'
        },
        {
          location:
            `Jurupa Valley, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/80df4dbde446cb99173f56cffc402e56-cc_ft_768.jpg'
        },
        {
          location:
            `La Habra, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/2a88c94850ee0f7cdf89d4fc37e58984-cc_ft_768.jpg'
        },
        {
          location:
            `La Mesa, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/25b49f28db9588cb52e0f454961aa1a6-cc_ft_768.jpg'
        },
        {
          location:
            `Laguna Niguel, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/cf0adb26eaae6fa9036425c0c706f952-cc_ft_768.jpg'
        },


        {
          location:
            `Lake Elsinore, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/04f860d3dfc6c90a958fb8da2054c7a7-cc_ft_768.jpg'
        },
        {
          location:
            `Lake Forest, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/bb0f2a98edd9e280dd4d77b26908f333-cc_ft_768.jpg'
        },
        {
          location:
            `Lancaster, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/8854e8afdae32dc282b0836455bb9846-cc_ft_768.jpg'
        },
        {
          location:
            `Livermore, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/67ccf014beb5eda2f99aeb5245f1a23a-cc_ft_768.jpg'
        },
        {
          location:
            `Lodi, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/e5291b5b6c83eb61ba08cf1d241eba31-cc_ft_768.jpg'
        },


        {
          location:
            `Long Beach, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/e0c2fd7979cffc032ead1c6ec92feb7a-cc_ft_768.jpg'
        },
        {
          location:
            `Los Angeles, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/aa3a9394280c5a0ab567ea4bcc0d64cf-cc_ft_768.jpg'
        },
        {
          location:
            `Lynwood, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/7baf6b8d52cf8758359fe45d3b290160-cc_ft_768.jpg'
        },
        {
          location:
            `Madera, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/68deaaaf0b2c88ed7295a39dfece670a-cc_ft_768.jpg'
        },
        {
          location:
            `Manteca, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/29144e1ff5b0aed518ad3b252dd5811a-cc_ft_768.jpg'
        },


        {
          location:
            `Menifee, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/a260a08a13e039f9cb52e4337b5c657a-cc_ft_768.jpg'
        },
        {
          location:
            `Merced, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/dbbb71b8882e38ac2afd09a08899d5c9-cc_ft_768.jpg'
        },
        {
          location:
            `Milpitas, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/c24a4e196a00faf26253dbcb8601b440-cc_ft_768.jpg'
        },
        {
          location:
            `Mission Viejo, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/e630db02c6e89b59360cf3b5993e6c4a-cc_ft_768.jpg'
        },
        {
          location:
            `Modesto, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/17201bf056dca892ce506e86712a0944-cc_ft_768.jpg'
        },
        {
          location:
            `Montebello, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/7474fe86c90d74d933926e93a3dd0f23-cc_ft_768.jpg'
        },


        {
          location:
            `Monterey Park, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/879bb05a42a79fba7702100141a6d9d3-cc_ft_768.jpg'
        },
        {
          location:
            `Moreno Valley, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/5729b559981740ba5844f6f217eca779-cc_ft_768.jpg'
        },
        {
          location:
            `Mountain View, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/93d5f7bd867ffdac15f60680dba3cdd4-cc_ft_768.jpg'
        },
        {
          location:
            `Napa, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/cacd5a34ff4245b8d5cc8e0850b51055-cc_ft_768.jpg'
        },
        {
          location:
            `National City, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/3603f71cf641c8e9ba7623be741a4cb7-cc_ft_768.jpg'
        },
        {
          location:
            `Newport Beach, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/f58ecce2c44ddf4a2d210304d5f62898-cc_ft_768.jpg'
        },
        {
          location:
            `Norwalk, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/037831aab61db5ae363fad1e3cb22be4-cc_ft_768.jpg'
        },
        {
          location:
            `Novato, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/63b75bbdbec8b3210f5d82f76902aebe-cc_ft_768.jpg'
        },
        {
          location:
            `Oakland, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/360aabbb356c1f81032713907f7d0a61-cc_ft_768.jpg'
        },
        {
          location:
            `Oceanside, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/55b3c2868a49685ae9dc7d895c800ae2-cc_ft_768.jpg'
        },
        {
          location:
            `Ontario, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/7a50424f32fe17fadc8df35b9f22929c-cc_ft_768.jpg'
        },
        {
          location:
            `Orange, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/d2e9a34fd6093feeae38c382662c8cc5-cc_ft_768.jpg'
        },
        {
          location:
            `Oxnard, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/0189927bdb66600f08b37a3b6a0abe5d-cc_ft_768.jpg'
        },
        {
          location:
            `Palm Desert, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/e0f95d195fc5423eb0172546d49dd82b-cc_ft_768.jpg'
        },
        {
          location:
            `Palmdale, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/abf9b7767a78c607b3adbbfa838d03f1-cc_ft_768.jpg'
        },
        {
          location:
            `Palo Alto, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/1251924d5a604da0874aad72d3664789-cc_ft_768.jpg'
        },
        {
          location:
            `Paramount, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/d93fa86254249fee447e9e71c394300f-cc_ft_768.jpg'
        },
        {
          location:
            `Perris, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/b6c2af2ccd12cda6590de64efd6b86d6-cc_ft_768.jpg'
        },
        {
          location:
            `Petaluma, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/b58ea7246f0e8e3555051c7a872eef16-cc_ft_768.jpg'
        },
        {
          location:
            `Pico Rivera, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/fb777aeb43f4e2a87b1553cbc79819ef-cc_ft_768.jpg'
        },
        {
          location:
            `Pittsburg, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/6e77e0ab419a120214c5f797b0734b9c-cc_ft_768.jpg'
        },
        {
          location:
            `Placentia, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/6e3275c417c4623ab85f550e4bbe4138-cc_ft_768.jpg'
        },
        {
          location:
            `Pleasanton, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/dabc311ba9d225da2ad701a029aff2c1-cc_ft_768.jpg'
        },
        {
          location:
            `Pomona, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/4f0da658e0775749caadd5ca97746008-cc_ft_768.jpg'
        },
        {
          location:
            `Porterville, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/1bb1e6a07a32b2c1e79bd5a93fe89d94-cc_ft_768.jpg'
        },


        {
          location:
            `Rancho Cordova, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/acbea4683ac47b2f0dfbcb57961dc108-cc_ft_768.jpg'
        },
        {
          location:
            `Rancho Cucamonga, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/acf947081a773d1ebb87c0054b18c121-cc_ft_768.jpg'
        },
        {
          location:
            `Redding, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/e4f5be19fad1990d20a513570edfefeb-cc_ft_768.jpg'
        },
        {
          location:
            `Redlands, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/95421e9b4038bdb92ecc53daf3bcc1c1-cc_ft_768.jpg'
        },
        {
          location:
            `Redondo Beach, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/7915849db7650d0008cd6abe4d7c65f0-cc_ft_768.jpg'
        },


        {
          location:
            `Redwood City, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/789586addf05b817c45c0d3002116df9-cc_ft_768.jpg'
        },
        {
          location:
            `Rialto, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/0d8664185553fd8ad12337549cb2cd79-cc_ft_768.jpg'
        },
        {
          location:
            `Riverside, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/c26d2a2f1e3f0eb8bc49832f2944249f-cc_ft_768.jpg'
        },
        {
          location:
            `Rocklin, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/b5897b56931eb5c9c45253375dd25c8f-cc_ft_768.jpg'
        },
        {
          location:
            `Rosemead, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/55e7ef0391636f9c5a1dbfa243ab08be-cc_ft_768.jpg'
        },


        {
          location:
            `Roseville, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/8e9fb19ba5f78f501ee7a9dd061092ef-cc_ft_768.jpg'
        },
        {
          location:
            `Sacramento, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/234e503a8eff838449c04ce5846adba6-cc_ft_768.jpg'
        },
        {
          location:
            `Salinas, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/8c7c8bec37a1006f83c824b0b8c71055-cc_ft_768.jpg'
        },
        {
          location:
            `San Bernardino, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/e2b9712da16984695a8f450771bc8c3f-cc_ft_768.jpg'
        },
        {
          location:
            `San Buenaventura (Ventura), CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/7fc72a428a89a7afc8ee6911ee61ec8f-cc_ft_768.jpg'
        },


        {
          location:
            `San Clemente, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/f83cc949d1b1f54d668d1688e0668ed0-cc_ft_768.jpg'
        },
        {
          location:
            `San Diego, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/becf8cb2dc53100b1bad0a2237d3cc8f-cc_ft_768.jpg'
        },
        {
          location:
            `San Francisco, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/bb98526f51a98d5f7a789f09643b2b79-cc_ft_768.jpg'
        },
        {
          location:
            `San Jose, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/445e279b179456a5b1503543d66c3420-cc_ft_768.jpg'
        },
        {
          location:
            `San Leandro, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/c3ee9f930d280fdfa1002b50e4b8b69a-cc_ft_768.jpg'
        },


        {
          location:
            `San Marcos, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/60c47533b27a46c8bd0832aae0b53a7c-cc_ft_768.jpg'
        },
        {
          location:
            `San Mateo, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/4b4f952a260d914bec8f8d142836699d-cc_ft_768.jpg'
        },
        {
          location:
            `San Rafael, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/cedfac2eead0b495e59461ac10bccfe4-cc_ft_768.jpg'
        },
        {
          location:
            `San Ramon, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/d7337ce333f1d234fe8ff95337d69f4d-cc_ft_768.jpg'
        },
        {
          location:
            `Santa Ana, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/2a3f6663c4e981ba764ccbb8837ddc02-cc_ft_768.jpg'
        },


        {
          location:
            `Santa Barbara, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/e5041fe75adf90fe7fde4c4db76da918-cc_ft_768.jpg'
        },
        {
          location:
            `Santa Clara, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/e87573fa174462a43d44d46954083553-cc_ft_768.jpg'
        },
        {
          location:
            `Santa Clarita, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/e23aeb6a310aa801e4f7c24ff9bad9b2-cc_ft_768.jpg'
        },
        {
          location:
            `Santa Cruz, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/789a6db59edec91f4045c09efceb322c-cc_ft_768.jpg'
        },
        {
          location:
            `Santa Maria, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/8b991844677ef195ede3ee625c572f3f-cc_ft_768.jpg'
        },


        {
          location:
            `Santa Monica, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/6da13c71dc383372cee11abbd892ed29-cc_ft_768.jpg'
        },
        {
          location:
            `Santa Rosa, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/ad19b27c73ee40cf852e85ed7fcef48b-cc_ft_768.jpg'
        },
        {
          location:
            `Santee, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/4e7918e43cbe768e8ffb383215de8633-cc_ft_768.jpg'
        },
        {
          location:
            `Simi Valley, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/ba31f5c8a4139ad689303d1b59f685f4-cc_ft_768.jpg'
        },
        {
          location:
            `South Gate, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/441aacf9914bbfd26ae459555c39976e-cc_ft_768.jpg'
        },


        {
          location:
            `South San Francisco, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/37b31db140734606bd36828dd7faea52-cc_ft_768.jpg'
        },
        {
          location:
            `Stockton, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/9ebd7600083608fe3d362cf57f53dba3-cc_ft_768.jpg'
        },
        {
          location:
            `Sunnyvale, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/c7f4321bfdc94389a378c109e97515c2-cc_ft_768.jpg'
        },
        {
          location:
            `Temecula, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/caeab558bf3d0f32972de5e4d34b844e-cc_ft_768.jpg'
        },
        {
          location:
            `Thousand Oaks, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/ffef5a1f0a1ef627fecfa566c0bcb64d-cc_ft_768.jpg'
        },


        {
          location:
            `Torrance, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/36c57413b855c2882680d3159c9ca20f-cc_ft_768.jpg'
        },
        {
          location:
            `Tracy, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/f3a4357fceba1e48acde27a020d4cc5d-cc_ft_768.jpg'
        },
        {
          location:
            `Tulare, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/d5e4515d627e111fd145f4ea6661141f-cc_ft_768.jpg'
        },
        {
          location:
            `Turlock, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/27d89d7fa817b8d40c4915c533b3a46b-cc_ft_768.jpg'
        },
        {
          location:
            `Tustin, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/60b3243a637d0a2699c1b4051134a8fa-cc_ft_768.jpg'
        },


        {
          location:
            `Union City, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/16db23ffccb7a4c5ddf83a7265a3c2d0-cc_ft_768.jpg'
        },
        {
          location:
            `Upland, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/f846f346f3addf36e967b85bd7b924f1-cc_ft_768.jpg'
        },
        {
          location:
            `Vacaville, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/d82b31efd59b2213f0ae8112ed25a321-cc_ft_768.jpg'
        },
        {
          location:
            `Vallejo, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/5902b3d21384030e08a616c402ce6d34-cc_ft_768.jpg'
        },
        {
          location:
            `Victorville, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/b55b94bd000abf6744a2d319254e2f0d-cc_ft_768.jpg'
        },


        {
          location:
            `Visalia, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/08db09b2b6730ecf4240a95ff0ee2326-cc_ft_768.jpg'
        },
        {
          location:
            `Vista, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/5a647da6a079b9a82a70e632f0209965-cc_ft_768.jpg'
        },
        {
          location:
            `Walnut Creek, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/2f98ee0f1cead29339d86b6ea9b70991-cc_ft_768.jpg'
        },
        {
          location:
            `Watsonville, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/030fdbff86745a1db63e23cc6bc489cd-cc_ft_768.jpg'
        },
        {
          location:
            `West Covina, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/14c193ef360e7fbf5f00c3a3e5ecd087-cc_ft_768.jpg'
        },


        {
          location:
            `West Sacramento, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/1a1870e80bd4383cce4cb184307e3fbf-cc_ft_768.jpg'
        },
        {
          location:
            `Whittier, CA`
          ,
          image: 'https://photos.zillowstatic.com/fp/feff7f59af9dc499ecff69787573e381-cc_ft_768.jpg'
        },
        {
          location:
            `Alexandria, VA`
          ,
          image: 'https://photos.zillowstatic.com/fp/9ff3168c1cc50c5887fc936775e292ae-cc_ft_768.jpg'
        },
        {
          location:
            `Chesapeake, VA`
          ,
          image: 'https://photos.zillowstatic.com/fp/d7039300b0a2e624dc40720d5048f592-cc_ft_768.jpg'
        },
        {
          location:
            `Harrisonburg, VA`
          ,
          image: 'https://photos.zillowstatic.com/fp/4fcae9765a97ec75960e216a8d3ea5fc-cc_ft_768.jpg'
        },
        {
          location:
            `Lynchburg, VA`
          ,
          image: 'https://photos.zillowstatic.com/fp/9ac35229e9f2d2a5eb55a1e49104ac51-cc_ft_768.jpg'
        },
        {
          location:
            `Newport News, VA`
          ,
          image: 'https://photos.zillowstatic.com/fp/80f850a73a590b48b1b89a2c24516abb-cc_ft_768.jpg'
        },
        {
          location:
            `Norfolk, VA`
          ,
          image: 'https://photos.zillowstatic.com/fp/ca252894285b0ddba39854f1252334f0-cc_ft_768.jpg'
        },
        {
          location:
            `Portsmouth, VA`
          ,
          image: 'https://photos.zillowstatic.com/fp/7ff925713c6ead798656e4ace90ee067-cc_ft_768.jpg'
        },
        {
          location:
            `Richmond, VA`
          ,
          image: 'https://photos.zillowstatic.com/fp/db9b02afe8a6236617faaee365240fe8-cc_ft_768.jpg'
        },


        {
          location:
            `Roanoke, VA`
          ,
          image: 'https://photos.zillowstatic.com/fp/94b4ca739253c0b2449f245d7a700994-cc_ft_768.jpg'
        },
        {
          location:
            `Suffolk, VA`
          ,
          image: 'https://photos.zillowstatic.com/fp/8001d0d013469e6415a3e6e998bf3eff-cc_ft_768.jpg'
        },
        {
          location:
            `Virginia Beach, VA`
          ,
          image: 'https://photos.zillowstatic.com/fp/8df776ac6cc9282e826aafd8ed5a658a-cc_ft_768.jpg'
        },
        {
          location:
            `Albuquerque, NM`
          ,
          image: 'https://photos.zillowstatic.com/fp/106634b0a95421d90cbbfa0fe4838999-cc_ft_768.jpg'
        },
        {
          location:
            `Las Cruces, NM`
          ,
          image: 'https://photos.zillowstatic.com/fp/a046d003d99822b9e2a2425541c3d4e6-cc_ft_768.jpg'
        },
        {
          location:
            `Rio Rancho, NM`
          ,
          image: 'https://photos.zillowstatic.com/fp/a6d83920150d1fa054068344ad0fc226-cc_ft_768.jpg'
        },


        {
          location:
            `Santa Fe, NM`
          ,
          image: 'https://photos.zillowstatic.com/fp/a000509ad6ecc3b43f3eccb450389145-cc_ft_768.jpg'
        },
        {
          location:
            `Albany, NY`
          ,
          image: 'https://photos.zillowstatic.com/fp/93c9402c11ec1be55d808e0b724ef848-cc_ft_768.jpg'
        },
        {
          location:
            `Buffalo, NY`
          ,
          image: 'https://photos.zillowstatic.com/fp/7794596b6bc68bbff04f3878fabc85ab-cc_ft_768.jpg'
        },
        {
          location:
            `Mount Vernon, NY`
          ,
          image: 'https://photos.zillowstatic.com/fp/057ad72885929d5c67ebce838de34b0f-cc_ft_768.jpg'
        },
        {
          location:
            `New Rochelle, NY`
          ,
          image: 'https://photos.zillowstatic.com/fp/b31302e9fbfb651354ea6340251fdcb4-cc_ft_768.jpg'
        },
        {
          location:
            `New York City, NY`
          ,
          image: 'https://photos.zillowstatic.com/fp/4b4539682bd4be84676127a019e82e14-cc_ft_768.jpg'
        },
        {
          location:
            `Rochester, NY`
          ,
          image: 'https://photos.zillowstatic.com/fp/4d52e87e47ee741a2e0d4a4680452270-cc_ft_768.jpg'
        },
        {
          location:
            `Schenectady, NY`
          ,
          image: 'https://photos.zillowstatic.com/fp/1cfdd466063a04fdb984cd23e9c38c4f-cc_ft_768.jpg'
        },
        {
          location:
            `Syracuse, NY`
          ,
          image: 'https://photos.zillowstatic.com/fp/02e574fd8cde64e54eef06f0ef756a3f-cc_ft_768.jpg'
        },
        {
          location:
            `Utica, NY`
          ,
          image: 'https://photos.zillowstatic.com/fp/f13593f57a13b75eb949fbb0b79941a1-cc_ft_768.jpg'
        },
        {
          location:
            `White Plains, NY`
          ,
          image: 'https://photos.zillowstatic.com/fp/84af3336385ee88498172bebd2d5d8f5-cc_ft_768.jpg'
        },
        {
          location:
            `Akron, OH`
          ,
          image: 'https://photos.zillowstatic.com/fp/80119ae3969c674689dd771a882823fc-cc_ft_768.jpg'
        },
        {
          location:
            `Canton, OH`
          ,
          image: 'https://photos.zillowstatic.com/fp/8ab26fec580820a7ae79ac66f14f4f8a-cc_ft_768.jpg'
        },
        {
          location:
            `Cincinnati, OH`
          ,
          image: 'https://photos.zillowstatic.com/fp/f878394339d37694c623ef6dc79839c9-cc_ft_768.jpg'
        },
        {
          location:
            `Cleveland, OH`
          ,
          image: 'https://photos.zillowstatic.com/fp/f0bf3de1941081f987b08a569f26e792-cc_ft_768.jpg'
        },
        {
          location:
            `Columbus, OH`
          ,
          image: 'https://photos.zillowstatic.com/fp/04e9743933d5aed050955e24003e5f67-cc_ft_768.jpg'
        },


        {
          location:
            `Dayton, OH`
          ,
          image: 'https://photos.zillowstatic.com/fp/2f12a2c396ac1bfd7d4be6364c6f4139-cc_ft_768.jpg'
        },
        {
          location:
            `Elyria, OH`
          ,
          image: 'https://photos.zillowstatic.com/fp/fab8924a92a7f9829dff04276309408a-cc_ft_768.jpg'
        },
        {
          location:
            `Hamilton, OH`
          ,
          image: 'https://photos.zillowstatic.com/fp/d021f17c7fab458fac8819297a244ec2-cc_ft_768.jpg'
        },
        {
          location:
            `Kettering, OH`
          ,
          image: 'https://photos.zillowstatic.com/fp/a2da88e66d33dc6b131282bdc8229af9-cc_ft_768.jpg'
        },
        {
          location:
            `Lorain, OH`
          ,
          image: 'https://photos.zillowstatic.com/fp/fe8c95a4683273ba6b1873f6f4852c90-cc_ft_768.jpg'
        },
        {
          location:
            `Parma, OH`
          ,
          image: 'https://photos.zillowstatic.com/fp/3c5ecd27fb6ccde57db19ed496da1203-cc_ft_768.jpg'
        },
        {
          location:
            `Toledo, OH`
          ,
          image: 'https://photos.zillowstatic.com/fp/df9bc3c0cd0be2249f10b25758a6b470-cc_ft_768.jpg'
        },
        {
          location:
            `Arvada, CO`
          ,
          image: 'https://photos.zillowstatic.com/fp/615458e706d8b3f451269d93551a6119-cc_ft_768.jpg'
        },
        {
          location:
            `Aurora, CO`
          ,
          image: 'https://photos.zillowstatic.com/fp/77e7147bd9116a92d0bc14350fe55b4f-cc_ft_768.jpg'
        },
        {
          location:
            `Boulder, CO`
          ,
          image: 'https://photos.zillowstatic.com/fp/54170cac8fcc1f598c929e20a669ccfd-cc_ft_768.jpg'
        },
        {
          location:
            `Broomfield, CO`
          ,
          image: 'https://photos.zillowstatic.com/fp/35b7b0d143b8ed23fba4ceda6dbca983-cc_ft_768.jpg'
        },
        {
          location:
            `Centennial, CO`
          ,
          image: 'https://photos.zillowstatic.com/fp/66631003d1cc4f5a60d0d1d7139c5e06-cc_ft_768.jpg'
        },
        {
          location:
            `Colorado Springs, CO`
          ,
          image: 'https://photos.zillowstatic.com/fp/3826fed0c546b3ec450666ece992a2fe-cc_ft_768.jpg'
        },
        {
          location:
            `Commerce City, CO`
          ,
          image: 'https://photos.zillowstatic.com/fp/6d69db0c9c4296e7e8d8825187dab6b1-cc_ft_768.jpg'
        },
        {
          location:
            `Denver, CO`
          ,
          image: 'https://photos.zillowstatic.com/fp/0ec3e2b97084162a62200f23692904fe-cc_ft_768.jpg'
        },


        {
          location:
            `Grand Junction, CO`
          ,
          image: 'https://photos.zillowstatic.com/fp/512cb2318e2f426f857420c42fca5203-cc_ft_768.jpg'
        },
        {
          location:
            `Greeley, CO`
          ,
          image: 'https://photos.zillowstatic.com/fp/fc2462a40ea4114f0ec95dbda152b555-cc_ft_768.jpg'
        },
        {
          location:
            `Lakewood, CO`
          ,
          image: 'https://photos.zillowstatic.com/fp/63df1a77f407134f47d2280c7bfa7733-cc_ft_768.jpg'
        },
        {
          location:
            `Longmont, CO`
          ,
          image: 'https://photos.zillowstatic.com/fp/d4fa77764dde9f8197308f7c22154f01-cc_ft_768.jpg'
        },
        {
          location:
            `Loveland, CO`
          ,
          image: 'https://photos.zillowstatic.com/fp/ef8f5a89fe517d688440b654eda0c061-cc_ft_768.jpg'
        },
        {
          location:
            `Pueblo, CO`
          ,
          image: 'https://photos.zillowstatic.com/fp/f4b1cd90bd3c29dd23da8af62cee4ea4-cc_ft_768.jpg'
        },
        {
          location:
            `Thornton, CO`
          ,
          image: 'https://photos.zillowstatic.com/fp/2f4cc8d78a5fc2d54809fcdc5253228d-cc_ft_768.jpg'
        },
        {
          location:
            `Westminster, CO`
          ,
          image: 'https://photos.zillowstatic.com/fp/e080a38874c53477f6ebce48c8529fc7-cc_ft_768.jpg'
        },


        {
          location:
            `Augusta, ME`
          ,
          image: 'https://photos.zillowstatic.com/fp/fdb3c12443810e7b041bbbe8a3af748f-cc_ft_768.jpg'
        },
        {
          location:
            `Auburn, WA`
          ,
          image: 'https://photos.zillowstatic.com/fp/569c2ac77a7c8533b2f0ca36aa2924d4-cc_ft_768.jpg'
        },
        {
          location:
            `Bellevue, WA`
          ,
          image: 'https://photos.zillowstatic.com/fp/4a7f4d59e9a52d6f6a92396944e1cb40-cc_ft_768.jpg'
        },
        {
          location:
            `Bellingham, WA`
          ,
          image: 'https://photos.zillowstatic.com/fp/be77f768652edcf82ab0b09eb9e2badd-cc_ft_768.jpg'
        },
        {
          location:
            `Burien, WA`
          ,
          image: 'https://photos.zillowstatic.com/fp/62a3fc3a9925bafc2da7e88a2a38f146-cc_ft_768.jpg'
        },


        {
          location:
            `Everett, WA`
          ,
          image: 'https://photos.zillowstatic.com/fp/26c483ed30982ace34ded260b20b5b69-cc_ft_768.jpg'
        },
        {
          location:
            `Federal Way, WA`
          ,
          image: 'https://photos.zillowstatic.com/fp/49813a55c893ab7d7679c28ffc7725e0-cc_ft_768.jpg'
        },
        {
          location:
            `Kennewick, WA`
          ,
          image: 'https://photos.zillowstatic.com/fp/fc34251dabf4520b203d4824032d94dd-cc_ft_768.jpg'
        },
        {
          location:
            `Kent, WA`
          ,
          image: 'https://photos.zillowstatic.com/fp/047f584f98cd1efb3c6a6c628b21d70f-cc_ft_768.jpg'
        },
        {
          location:
            `Kirkland, WA`
          ,
          image: 'https://photos.zillowstatic.com/fp/017d44d6af49603a6550acceebc28cfd-cc_ft_768.jpg'
        },
        {
          location:
            `Lacey, WA`
          ,
          image: 'https://photos.zillowstatic.com/fp/a6b7e3da2f479c511de37b17fc313549-cc_ft_768.jpg'
        },
        {
          location:
            `Marysville, WA`
          ,
          image: 'https://photos.zillowstatic.com/fp/c3ff1189f759f5afea66ad5710bed066-cc_ft_768.jpg'
        },
        {
          location:
            `Olympia, WA`
          ,
          image: 'https://photos.zillowstatic.com/fp/f505b0ba5ee30daae14e1237d75657ce-cc_ft_768.jpg'
        },
        {
          location:
            `Pasco, WA`
          ,
          image: 'https://photos.zillowstatic.com/fp/a279a865ff5d345d6ca36e2dbdec28f0-cc_ft_768.jpg'
        },
        {
          location:
            `Redmond, WA`
          ,
          image: 'https://photos.zillowstatic.com/fp/31b5675795524700a6a1ebb573176b28-cc_ft_768.jpg'
        },
        {
          location:
            `Renton, WA`
          ,
          image: 'https://photos.zillowstatic.com/fp/1bfd5145973284a477650e170f83c4f7-cc_ft_768.jpg'
        },
        {
          location:
            `Richland, WA`
          ,
          image: 'https://photos.zillowstatic.com/fp/daa4f76a19b13ac1b24ecdcc83d544d3-cc_ft_768.jpg'
        },
        {
          location:
            `Sammamish, WA`
          ,
          image: 'https://photos.zillowstatic.com/fp/2fc9daf059890989e257cdc29f6fd7d6-cc_ft_768.jpg'
        },
        {
          location:
            `Seattle, WA`
          ,
          image: 'https://photos.zillowstatic.com/fp/4d72b1040f922e8018c9628b727df27b-cc_ft_768.jpg'
        },
        {
          location:
            `Shoreline, WA`
          ,
          image: 'https://photos.zillowstatic.com/fp/b386b28877c8cfbbbd9c5ea92e6641ed-cc_ft_768.jpg'
        },
        {
          location:
            `Spokane Valley, WA`
          ,
          image: 'https://photos.zillowstatic.com/fp/e1a25eb8d957c1a0cfa8bdedea01faa3-cc_ft_768.jpg'
        },
        {
          location:
            `Spokane, WA`
          ,
          image: 'https://photos.zillowstatic.com/fp/8ff0ba2ee00c458a22b65deaa43bdc60-cc_ft_768.jpg'
        },
        {
          location:
            `Tacoma, WA`
          ,
          image: 'https://photos.zillowstatic.com/fp/7a190b455c59318cf1e5117ef03db69a-cc_ft_768.jpg'
        },
        {
          location:
            `Vancouver, WA`
          ,
          image: 'https://photos.zillowstatic.com/fp/f29cc9d18e45c2f64c728d6d51f63c08-cc_ft_768.jpg'
        },
        {
          location:
            `Asheville, NC`
          ,
          image: 'https://photos.zillowstatic.com/fp/1c3a7daa8971c65ee96dd8f5aea763bd-cc_ft_768.jpg'
        },
        {
          location:
            `Burlington, NC`
          ,
          image: 'https://photos.zillowstatic.com/fp/533dc14534855c3aa376ed610c73d0d6-cc_ft_768.jpg'
        },
        {
          location:
            `Charlotte, NC`
          ,
          image: 'https://photos.zillowstatic.com/fp/6ffc1421e0d0e73a6c68333c68eaf1b1-cc_ft_768.jpg'
        },
        {
          location:
            `Durham, NC`
          ,
          image: 'https://photos.zillowstatic.com/fp/a23601c7af7a357f18b160ea7311d7fe-cc_ft_768.jpg'
        },
        {
          location:
            `Fayetteville, NC`
          ,
          image: 'https://photos.zillowstatic.com/fp/d8024c1bbfdde3138615ff541654b1df-cc_ft_768.jpg'
        },
        {
          location:
            `Gastonia, NC`
          ,
          image: 'https://photos.zillowstatic.com/fp/17b8e71125a013c1528f66bb4c275302-cc_ft_768.jpg'
        },
        {
          location:
            `Greensboro, NC`
          ,
          image: 'https://photos.zillowstatic.com/fp/df7e84cc4a83dbdfb1a4acfd3258c310-cc_ft_768.jpg'
        },
        {
          location:
            `Greenville, NC`
          ,
          image: 'https://photos.zillowstatic.com/fp/206d1b21f200afb880f8aeffff60aab2-cc_ft_768.jpg'
        },
        {
          location:
            `High Point, NC`
          ,
          image: 'https://photos.zillowstatic.com/fp/f88efc03c7a3b0afbc7a03354e6141bc-cc_ft_768.jpg'
        },
        {
          location:
            `Kannapolis, NC`
          ,
          image: 'https://photos.zillowstatic.com/fp/d132c1e5e016cddd6bdb64ae2b6d02f5-cc_ft_768.jpg'
        },
        {
          location:
            `Raleigh, NC`
          ,
          image: 'https://photos.zillowstatic.com/fp/bf603a6343db056ef26bd318cfe53bfc-cc_ft_768.jpg'
        },
        {
          location:
            `Rocky Mount, NC`
          ,
          image: 'https://photos.zillowstatic.com/fp/bdd8b7cb01cbfe6bc3484c1197c4bc6e-cc_ft_768.jpg'
        },
        {
          location:
            `Winston Salem, NC`
          ,
          image: 'https://photos.zillowstatic.com/fp/911cd96fd37c331af6145e4d9e06218b-cc_ft_768.jpg'
        },
        {
          location:
            `Apple Valley, MN`
          ,
          image: 'https://photos.zillowstatic.com/fp/01d1ef815c076854c29557214391c097-cc_ft_768.jpg'
        },
        {
          location:
            `Blaine, MN`
          ,
          image: 'https://photos.zillowstatic.com/fp/c96aa5ffac95210fcd1b8d444931ccb2-cc_ft_768.jpg'
        },
        {
          location:
            `Brooklyn Park, MN`
          ,
          image: 'https://photos.zillowstatic.com/fp/dfdc61d86a33683d7fdb029927369bd8-cc_ft_768.jpg'
        },
        {
          location:
            `Burnsville, MN`
          ,
          image: 'https://photos.zillowstatic.com/fp/721d3dda88b8f39670cccf413e850692-cc_ft_768.jpg'
        },
        {
          location:
            `Coon Rapids, MN`
          ,
          image: 'https://photos.zillowstatic.com/fp/04dca9a579338138a3a425f61efdbb56-cc_ft_768.jpg'
        },
        {
          location:
            `Duluth, MN`
          ,
          image: 'https://photos.zillowstatic.com/fp/5dbcd3a17a13ef7658309d04df895014-cc_ft_768.jpg'
        },
        {
          location:
            `Eagan, MN`
          ,
          image: 'https://photos.zillowstatic.com/fp/1cb55e26a91538bbddcc696022bdf513-cc_ft_768.jpg'
        },
        {
          location:
            `Eden Prairie, MN`
          ,
          image: 'https://photos.zillowstatic.com/fp/33d9b06f7ea4c3f8582b824a7f1c87a1-cc_ft_768.jpg'
        },
        {
          location:
            `Edina, MN`
          ,
          image: 'https://photos.zillowstatic.com/fp/79ba8ac24acd80a9488d704360cde2f9-cc_ft_768.jpg'
        },
        {
          location:
            `Lakeville, MN`
          ,
          image: 'https://photos.zillowstatic.com/fp/b1b0cd7fc0748a27727ff8586ce586df-cc_ft_768.jpg'
        },
        {
          location:
            `Maple Grove, MN`
          ,
          image: 'https://photos.zillowstatic.com/fp/326cd0194f00ad3aed721a4702221fe7-cc_ft_768.jpg'
        },
        {
          location:
            `Minneapolis, MN`
          ,
          image: 'https://photos.zillowstatic.com/fp/0fb6fdb649a878ad6035f833602aa9ae-cc_ft_768.jpg'
        },
        {
          location:
            `Minnetonka, MN`
          ,
          image: 'https://photos.zillowstatic.com/fp/e0a0b6496edc5fd4bf9b77eff59f79f3-cc_ft_768.jpg'
        },
        {
          location:
            `Plymouth, MN`
          ,
          image: 'https://photos.zillowstatic.com/fp/ca868f213d6584208fdc94471f68248e-cc_ft_768.jpg'
        },
        {
          location:
            `Saint Cloud, MN`
          ,
          image: 'https://photos.zillowstatic.com/fp/dab414fa47242eac826da2b9a7806c0a-cc_ft_768.jpg'
        },
        {
          location:
            `Saint Paul, MN`
          ,
          image: 'https://photos.zillowstatic.com/fp/6a48e13df0eea67ae46699cd9ee2cd16-cc_ft_768.jpg'
        },
        {
          location:
            `Woodbury, MN`
          ,
          image: 'https://photos.zillowstatic.com/fp/99dfff2e00befd113655520fae0b3df9-cc_ft_768.jpg'
        },
        {
          location:
            `Appleton, WI`
          ,
          image: 'https://photos.zillowstatic.com/fp/cb7422a5db3d77c467b5b7fbb61f45c7-cc_ft_768.jpg'
        },
        {
          location:
            `Eau Claire, WI`
          ,
          image: 'https://photos.zillowstatic.com/fp/2c8cedee20b8fe8281fb88fa2b8965bd-cc_ft_768.jpg'
        },
        {
          location:
            `Green Bay, WI`
          ,
          image: 'https://photos.zillowstatic.com/fp/77bf81bf24867bb3264cb5aaeafb9c8c-cc_ft_768.jpg'
        },
        {
          location:
            `Janesville, WI`
          ,
          image: 'https://photos.zillowstatic.com/fp/0512271cbccaeaa688e64107580e702c-cc_ft_768.jpg'
        },
        {
          location:
            `Kenosha, WI`
          ,
          image: 'https://photos.zillowstatic.com/fp/012951b62762c13d82e938f4d8f11d94-cc_ft_768.jpg'
        },
        {
          location:
            `La Crosse, WI`
          ,
          image: 'https://photos.zillowstatic.com/fp/1250f0a0f3f33f07c9f76eaf38bb744e-cc_ft_768.jpg'
        },
        {
          location:
            `Madison, WI`
          ,
          image: 'https://photos.zillowstatic.com/fp/8edfb7570a1ca44c68d96cc6e53ca44b-cc_ft_768.jpg'
        },
        {
          location:
            `Milwaukee, WI`
          ,
          image: 'https://photos.zillowstatic.com/fp/8555b473df9aa814bb8e560497936f64-cc_ft_768.jpg'
        },
        {
          location:
            `Oshkosh, WI`
          ,
          image: 'https://photos.zillowstatic.com/fp/aaec82352b18805f11a8187572a573ed-cc_ft_768.jpg'
        },
        {
          location:
            `Racine, WI`
          ,
          image: 'https://photos.zillowstatic.com/fp/c359d3966e1da28f933b6d6e37e51389-cc_ft_768.jpg'
        },
        {
          location:
            `Waukesha, WI`
          ,
          image: 'https://photos.zillowstatic.com/fp/722e66996efb1b5a804c1487c571ad9c-cc_ft_768.jpg'
        },
        {
          location:
            `West Allis, WI`
          ,
          image: 'https://photos.zillowstatic.com/fp/faff73b300c955a6b22bb7f6b4b5a534-cc_ft_768.jpg'
        },
        {
          location:
            `Apopka, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/8a5fd9b4d53894fd52dcc4fbf4b5a80b-cc_ft_768.jpg'
        },
        {
          location:
            `Boca Raton, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/25e488f316d8e5c5f772c9cd69ef62a6-cc_ft_768.jpg'
        },
        {
          location:
            `Bonita Springs, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/e316cdd97295dd293a8bc903bdba8bc3-cc_ft_768.jpg'
        },
        {
          location:
            `Boynton Beach, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/17c5642a855ba7712a692dd48ad7923a-cc_ft_768.jpg'
        },
        {
          location:
            `Bradenton, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/eec88530368e38f0fe28c9848fcaada6-cc_ft_768.jpg'
        },
        {
          location:
            `Cape Coral, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/bb37d40d22014bd593795d475a7ef375-cc_ft_768.jpg'
        },
        {
          location:
            `Clearwater, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/42baeff13a5e3e2d9abc1e82afd021d1-cc_ft_768.jpg'
        },
        {
          location:
            `Coconut Creek, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/c672591f65a46bfd803b77a912cec029-cc_ft_768.jpg'
        },
        {
          location:
            `Coral Springs, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/be8a64325f1cec68a1ceab6ddd4f366e-cc_ft_768.jpg'
        },
        {
          location:
            `Daytona Beach, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/ec545bccec898b2a3d6f32e70c162ff9-cc_ft_768.jpg'
        },
        {
          location:
            `Deerfield Beach, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/c252dbfe5077657a1547ce27d256b43e-cc_ft_768.jpg'
        },
        {
          location:
            `Delray Beach, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/18fba2593bb03d80ed0792f98b008c8b-cc_ft_768.jpg'
        },
        {
          location:
            `Deltona, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/8858e82aa6e61e1376672acc876c0296-cc_ft_768.jpg'
        },
        {
          location:
            `Doral, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/3cf184f4d7f41cb2bcc914fd64551a2a-cc_ft_768.jpg'
        },
        {
          location:
            `Fort Lauderdale, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/dae857861897660d5d42b8e32a4be7f2-cc_ft_768.jpg'
        },
        {
          location:
            `Fort Myers, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/d6a6807b6090002d47d5b0a20ea46ee7-cc_ft_768.jpg'
        },
        {
          location:
            `Gainesville, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/0658118055b683f5752f12cccc4cbeb6-cc_ft_768.jpg'
        },
        {
          location:
            `Hialeah, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/85bbd44e0076faec3d02e03eb14e7e5a-cc_ft_768.jpg'
        },
        {
          location:
            `Hollywood, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/0a0e054dc5a9b366e91972400bb48d51-cc_ft_768.jpg'
        },
        {
          location:
            `Homestead, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/424ba7d1989711649e6245d9e5e61c00-cc_ft_768.jpg'
        },
        {
          location:
            `Jacksonville, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/f2b39d8cc95a009b5d47c131b5269369-cc_ft_768.jpg'
        },
        {
          location:
            `Kissimmee, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/fc4b6aef0fd74a12288a9aa108bf1e29-cc_ft_768.jpg'
        },
        {
          location:
            `Lakeland, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/863a92870e05f4d5c68444bae9b80330-cc_ft_768.jpg'
        },
        {
          location:
            `Largo, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/eda87e3984310f8f68cb2e00d82a0eb7-cc_ft_768.jpg'
        },
        {
          location:
            `Lauderhill, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/4a13160cdb6b5f162c651dda10af9776-cc_ft_768.jpg'
        },
        {
          location:
            `Margate, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/0e8ff37488375def0b4b1dcf36f74b3e-cc_ft_768.jpg'
        },
        {
          location:
            `Melbourne, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/b0d8088b8324b390470adb7d86b9d9e1-cc_ft_768.jpg'
        },
        {
          location:
            `Miami Beach, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/915d300eba72c70e444f6e5aaea27001-cc_ft_768.jpg'
        },
        {
          location:
            `Miami Gardens, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/e2da780438b888691aae6d5fa626cb6b-cc_ft_768.jpg'
        },
        {
          location:
            `Miami, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/2fe271d9c960466c534ef5141607f1be-cc_ft_768.jpg'
        },
        {
          location:
            `Miramar, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/b4e12e6d9021228c2b2462a506e7e4b3-cc_ft_768.jpg'
        },
        {
          location:
            `North Miami, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/490f1fa8f6cc8b6e268c95eb75eb0b49-cc_ft_768.jpg'
        },
        {
          location:
            `North Port, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/559b5e4d2273ed8438925bcece99ae35-cc_ft_768.jpg'
        },
        {
          location:
            `Ocala, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/56bfe91cf2d20b2d21aad9363278ad79-cc_ft_768.jpg'
        },
        {
          location:
            `Orlando, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/5df6dd3e3aac67649e9ba1d17aff4e2c-cc_ft_768.jpg'
        },
        {
          location:
            `Palm Bay, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/86ebdeff5019cdb4395822ca7044c057-cc_ft_768.jpg'
        },
        {
          location:
            `Palm Beach Gardens, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/a871132a337d32f2ccf3e2777ef051c8-cc_ft_768.jpg'
        },
        {
          location:
            `Palm Coast, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/c8c9df663c289a4b8c770c2dfb3cce5f-cc_ft_768.jpg'
        },
        {
          location:
            `Pensacola, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/3cec75bc1c929f3f5f528bb1323647da-cc_ft_768.jpg'
        },
        {
          location:
            `Pinellas Park, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/861e4463ef27e2e0a47477776c352680-cc_ft_768.jpg'
        },
        {
          location:
            `Plantation, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/e74fe6ae91c1df3434de8195748d453d-cc_ft_768.jpg'
        },
        {
          location:
            `Pompano Beach, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/83efd61b530bdfadaf54085a2d9ef913-cc_ft_768.jpg'
        },
        {
          location:
            `Port Orange, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/edc4b2680de5bb397e7fd22c43a4cd28-cc_ft_768.jpg'
        },


        {
          location:
            `Port Saint Lucie, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/f72f25dcca519b8d1c306ecf2df3b9a7-cc_ft_768.jpg'
        },
        {
          location:
            `Saint Petersburg, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/2c6b5acbd53d100ad9d89196fdd779f4-cc_ft_768.jpg'
        },
        {
          location:
            `Sanford, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/7399476fe2846449d0747cda7f9289fa-cc_ft_768.jpg'
        },
        {
          location:
            `Sarasota, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/e6bf81b422ad43c157e8d7276e280510-cc_ft_768.jpg'
        },
        {
          location:
            `Sunrise, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/18e38b8eb4446dcd19f397705f86e2e1-cc_ft_768.jpg'
        },
        {
          location:
            `Tallahassee, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/3b31e3da67971eb2e1c9a557b9453b78-cc_ft_768.jpg'
        },
        {
          location:
            `Tamarac, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/5473179b3cf36dbdb31dc2ecf2a5de04-cc_ft_768.jpg'
        },
        {
          location:
            `Tampa, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/d2ad4afc4c6fc7f292630bc6ad5258b1-cc_ft_768.jpg'
        },
        {
          location:
            `West Palm Beach, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/cd5e4f2c0705ad574517c037ae88a4b9-cc_ft_768.jpg'
        },
        {
          location:
            `Weston, FL`
          ,
          image: 'https://photos.zillowstatic.com/fp/4be684f0d4c6db39d2292798bf45401e-cc_ft_768.jpg'
        },
        {
          location:
            `Ann Arbor, MI`
          ,
          image: 'https://photos.zillowstatic.com/fp/449dab89f43222a0bd47a4927f9d8d61-cc_ft_768.jpg'
        },
        {
          location:
            `Battle Creek, MI`
          ,
          image: 'https://photos.zillowstatic.com/fp/05934b570dc120ac973070a6f0899059-cc_ft_768.jpg'
        },
        {
          location:
            `Dearborn Heights, MI`
          ,
          image: 'https://photos.zillowstatic.com/fp/c156e51d9512390675d6a4348e8f91e4-cc_ft_768.jpg'
        },
        {
          location:
            `Dearborn, MI`
          ,
          image: 'https://photos.zillowstatic.com/fp/8a2f2f7b7fe4978de3c8393584410ca7-cc_ft_768.jpg'
        },
        {
          location:
            `Detroit, MI`
          ,
          image: 'https://photos.zillowstatic.com/fp/cb8dd48ac570afce25a8de662f1964ec-cc_ft_768.jpg'
        },
        {
          location:
            `Farmington Hills, MI`
          ,
          image: 'https://photos.zillowstatic.com/fp/e68d1c76f736cb9a072de1160737be34-cc_ft_768.jpg'
        },
        {
          location:
            `Flint, MI`
          ,
          image: 'https://photos.zillowstatic.com/fp/b8130d5ef8450fa78c0f43a1f7e1fc2e-cc_ft_768.jpg'
        },
        {
          location:
            `Grand Rapids, MI`
          ,
          image: 'https://photos.zillowstatic.com/fp/8474e3d004f2872c33ecb5103719bdfd-cc_ft_768.jpg'
        },
        {
          location:
            `Kalamazoo, MI`
          ,
          image: 'https://photos.zillowstatic.com/fp/518df22bba1ed611aac0cc035755c3a7-cc_ft_768.jpg'
        },
        {
          location:
            `Kentwood, MI`
          ,
          image: 'https://photos.zillowstatic.com/fp/8867258335b0dceb62200b0d0a7f24fe-cc_ft_768.jpg'
        },


        {
          location:
            `Lansing, MI`
          ,
          image: 'https://photos.zillowstatic.com/fp/78ef17c482b3391489c46d0c78334add-cc_ft_768.jpg'
        },
        {
          location:
            `Livonia, MI`
          ,
          image: 'https://photos.zillowstatic.com/fp/3e9a5f2cb35d68f113e3c65d8ab1fb95-cc_ft_768.jpg'
        },
        {
          location:
            `Novi, MI`
          ,
          image: 'https://photos.zillowstatic.com/fp/e39cce5f8f9951bfa3edf7de998204fc-cc_ft_768.jpg'
        },
        {
          location:
            `Pontiac, MI`
          ,
          image: 'https://photos.zillowstatic.com/fp/7ffd554889bbefac38238989629816e9-cc_ft_768.jpg'
        },
        {
          location:
            `Rochester Hills, MI`
          ,
          image: 'https://photos.zillowstatic.com/fp/13bef4d49c6e53d6794ccba56a4ef1ec-cc_ft_768.jpg'
        },
        {
          location:
            `Royal Oak, MI`
          ,
          image: 'https://photos.zillowstatic.com/fp/041821de14e23a7aa49d6a994107d7db-cc_ft_768.jpg'
        },
        {
          location:
            `Saint Clair Shores, MI`
          ,
          image: 'https://photos.zillowstatic.com/fp/f616447d6e869edf3ea697975400b56e-cc_ft_768.jpg'
        },
        {
          location:
            `Southfield, MI`
          ,
          image: 'https://photos.zillowstatic.com/fp/a7f651b74a0041ee95e17f9d88f1747f-cc_ft_768.jpg'
        },
        {
          location:
            `Sterling Heights, MI`
          ,
          image: 'https://photos.zillowstatic.com/fp/670c918ce638d653df55abbcf317ef86-cc_ft_768.jpg'
        },
        {
          location:
            `Taylor, MI`
          ,
          image: 'https://photos.zillowstatic.com/fp/01f25cb3693e2ecb8142b46d9bcfdb98-cc_ft_768.jpg'
        },
        {
          location:
            `Troy, MI`
          ,
          image: 'https://photos.zillowstatic.com/fp/ab6b6eddc56fa50bcfc1a18427caad9a-cc_ft_768.jpg'
        },
        {
          location:
            `Warren, MI`
          ,
          image: 'https://photos.zillowstatic.com/fp/acc24668023d8764a28a46957d128e84-cc_ft_768.jpg'
        },
        {
          location:
            `Westland, MI`
          ,
          image: 'https://photos.zillowstatic.com/fp/ea22ed1da32aec6ee6debefd63fb5a95-cc_ft_768.jpg'
        },
        {
          location:
            `Annapolis, MD`
          ,
          image: 'https://photos.zillowstatic.com/fp/0c3ff14157155514291c0b7b3a3ca5d5-cc_ft_768.jpg'
        },
        {
          location:
            `Baltimore, MD`
          ,
          image: 'https://photos.zillowstatic.com/fp/041af4e85e0f9ab618717979d2685213-cc_ft_768.jpg'
        },
        {
          location:
            `Bowie, MD`
          ,
          image: 'https://photos.zillowstatic.com/fp/debafff3f0c82fc736b5c3ed4fd83d72-cc_ft_768.jpg'
        },
        {
          location:
            `Frederick, MD`
          ,
          image: 'https://photos.zillowstatic.com/fp/a18f6089b2665d2132c3a1232fe03190-cc_ft_768.jpg'
        },
        {
          location:
            `Gaithersburg, MD`
          ,
          image: 'https://photos.zillowstatic.com/fp/d28dd7981ebb91c33d49197e9edcd843-cc_ft_768.jpg'
        },
        {
          location:
            `Rockville, MD`
          ,
          image: 'https://photos.zillowstatic.com/fp/a9ba3a67bfedab6134b52094df885818-cc_ft_768.jpg'
        },
        {
          location:
            `Ames, IA`
          ,
          image: 'https://photos.zillowstatic.com/fp/4bedf86c6321394fec768fd8f9258e42-cc_ft_768.jpg'
        },
        {
          location:
            `Ankeny, IA`
          ,
          image: 'https://photos.zillowstatic.com/fp/2eb3c196d4aba61c998b444f2e1fc098-cc_ft_768.jpg'
        },
        {
          location:
            `Cedar Rapids, IA`
          ,
          image: 'https://photos.zillowstatic.com/fp/40ac39b08116b6173e1412ec0ca88e4b-cc_ft_768.jpg'
        },
        {
          location:
            `Council Bluffs, IA`
          ,
          image: 'https://photos.zillowstatic.com/fp/5b668f29a46fd9d6cc940d2b2a027232-cc_ft_768.jpg'
        },
        {
          location:
            `Davenport, IA`
          ,
          image: 'https://photos.zillowstatic.com/fp/f4e1910775c392a98ef386522c87fb06-cc_ft_768.jpg'
        },
        {
          location:
            `Des Moines, IA`
          ,
          image: 'https://photos.zillowstatic.com/fp/7e6f4637c3667769b2a2153f6399bb23-cc_ft_768.jpg'
        },
        {
          location:
            `Dubuque, IA`
          ,
          image: 'https://photos.zillowstatic.com/fp/29c323457cfeadccc82c31f2637c08f1-cc_ft_768.jpg'
        },
        {
          location:
            `Iowa City, IA`
          ,
          image: 'https://photos.zillowstatic.com/fp/8783e8746d1e43579cb7ab9fdde18ad0-cc_ft_768.jpg'
        },
        {
          location:
            `Sioux City, IA`
          ,
          image: 'https://photos.zillowstatic.com/fp/a6d56b5f74e030d9e99a82930444267e-cc_ft_768.jpg'
        },
        {
          location:
            `Waterloo, IA`
          ,
          image: 'https://photos.zillowstatic.com/fp/ed448a50529621bf17a0e5724aa4592f-cc_ft_768.jpg'
        },
        {
          location:
            `West Des Moines, IA`
          ,
          image: 'https://photos.zillowstatic.com/fp/7664cdf84f0fc1c6bc030e223e191c4d-cc_ft_768.jpg'
        },
        {
          location:
            `Anderson, IN`
          ,
          image: 'https://photos.zillowstatic.com/fp/1a67606202d01212ad23b34a60147bdc-cc_ft_768.jpg'
        },
        {
          location:
            `Bloomington, IN`
          ,
          image: 'https://photos.zillowstatic.com/fp/dcb938f923d97ad78ce3d57277457ce7-cc_ft_768.jpg'
        },
        {
          location:
            `Carmel, IN`
          ,
          image: 'https://photos.zillowstatic.com/fp/a4f370b4bd799bcbe11aece699e16526-cc_ft_768.jpg'
        },
        {
          location:
            `Elkhart, IN`
          ,
          image: 'https://photos.zillowstatic.com/fp/98e1bfa04f46c470ef8f57d2881891a3-cc_ft_768.jpg'
        },
        {
          location:
            `Evansville, IN`
          ,
          image: 'https://photos.zillowstatic.com/fp/6197b6fabae548d47b39c30971aeceea-cc_ft_768.jpg'
        },
        {
          location:
            `Fishers, IN`
          ,
          image: 'https://photos.zillowstatic.com/fp/6140a74d572a0933cd99fe3bd037c0f0-cc_ft_768.jpg'
        },
        {
          location:
            `Fort Wayne, IN`
          ,
          image: 'https://photos.zillowstatic.com/fp/e8bc67a21a5e4c20dddd0bdc9410e016-cc_ft_768.jpg'
        },
        {
          location:
            `Gary, IN`
          ,
          image: 'https://photos.zillowstatic.com/fp/6f385304db378f96a8bb7bc113badcb3-cc_ft_768.jpg'
        },
        {
          location:
            `Greenwood, IN`
          ,
          image: 'https://photos.zillowstatic.com/fp/e40ce7094914f00049757630a065cd00-cc_ft_768.jpg'
        },
        {
          location:
            `Hammond, IN`
          ,
          image: 'https://photos.zillowstatic.com/fp/e779ce82734a087835f4cef28ac03806-cc_ft_768.jpg'
        },
        {
          location:
            `Indianapolis, IN`
          ,
          image: 'https://photos.zillowstatic.com/fp/9c007f2e6955a5cff9165f480ee73552-cc_ft_768.jpg'
        },
        {
          location:
            `Kokomo, IN`
          ,
          image: 'https://photos.zillowstatic.com/fp/fd176db904534abecb42ff7b54c2023b-cc_ft_768.jpg'
        },
        {
          location:
            `Mishawaka, IN`
          ,
          image: 'https://photos.zillowstatic.com/fp/27221d49c11e4830ea4336ca74e78a43-cc_ft_768.jpg'
        },
        {
          location:
            `Muncie, IN`
          ,
          image: 'https://photos.zillowstatic.com/fp/62b512b0938c96d1a411f99ed6a83eea-cc_ft_768.jpg'
        },
        {
          location:
            `Noblesville, IN`
          ,
          image: 'https://photos.zillowstatic.com/fp/afc21094fcd154158f346f278c3954fe-cc_ft_768.jpg'
        },
        {
          location:
            `South Bend, IN`
          ,
          image: 'https://photos.zillowstatic.com/fp/fdfeccd73c84a46b7f18c860f80bd010-cc_ft_768.jpg'
        },
        {
          location:
            `Terre Haute, IN`
          ,
          image: 'https://photos.zillowstatic.com/fp/4f7c6f50d7ff06e4e2f87445f46484f3-cc_ft_768.jpg'
        },
        {
          location:
            `West Lafayette, IN`
          ,
          image: 'https://photos.zillowstatic.com/fp/b16f5230ec561c87773b22a11689d335-cc_ft_768.jpg'
        },
        {
          location:
            `Boston, MA`
          ,
          image: 'https://photos.zillowstatic.com/fp/61d16714585f330dfbfe0ca7f9fd8f22-cc_ft_768.jpg'
        },
        {
          location:
            `Brockton, MA`
          ,
          image: 'https://photos.zillowstatic.com/fp/09c68c1aa97142e934d4872472dd189f-cc_ft_768.jpg'
        },


        {
          location:
            `Cambridge, MA`
          ,
          image: 'https://photos.zillowstatic.com/fp/c111f84e9b266128eeec4e9385200011-cc_ft_768.jpg'
        },
        {
          location:
            `Chicopee, MA`
          ,
          image: 'https://photos.zillowstatic.com/fp/4ca9915e644a490efbd8b3cb9b0a6dfa-cc_ft_768.jpg'
        },
        {
          location:
            `Fall River, MA`
          ,
          image: 'https://photos.zillowstatic.com/fp/80470aa74957051dc9bb9ed0d1abb37a-cc_ft_768.jpg'
        },
        {
          location:
            `Framingham, MA`
          ,
          image: 'https://photos.zillowstatic.com/fp/5cb52cf7255dcade901d33dd5ed00e97-cc_ft_768.jpg'
        },
        {
          location:
            `Haverhill, MA`
          ,
          image: 'https://photos.zillowstatic.com/fp/db53ef6e0fc0ce95c782c61cf0d8259f-cc_ft_768.jpg'
        },
        {
          location:
            `Lowell, MA`
          ,
          image: 'https://photos.zillowstatic.com/fp/80119c298980e2cc0db22fed8d4e795f-cc_ft_768.jpg'
        },
        {
          location:
            `Lynn, MA`
          ,
          image: 'https://photos.zillowstatic.com/fp/ce4a07a197c91de98c784256036f7f02-cc_ft_768.jpg'
        },
        {
          location:
            `Malden, MA`
          ,
          image: 'https://photos.zillowstatic.com/fp/7908ed8dd77de1590c076f48cf8632b1-cc_ft_768.jpg'
        },
        {
          location:
            `Methuen Town, MA`
          ,
          image: 'https://photos.zillowstatic.com/fp/d04cb539856e053ff5d0d84506548ece-cc_ft_384.jpg'
        },
        {
          location:
            `New Bedford, MA`
          ,
          image: 'https://photos.zillowstatic.com/fp/03fe78a43f0a0c909abc11ee61d04738-cc_ft_768.jpg'
        },
        {
          location:
            `Newton, MA`
          ,
          image: 'https://photos.zillowstatic.com/fp/3539181d34d88947ebb002da425762df-cc_ft_768.jpg'
        },
        {
          location:
            `Peabody, MA`
          ,
          image: 'https://photos.zillowstatic.com/fp/1d27eefeccfaf6792f0b04501f8ef6fd-cc_ft_768.jpg'
        },
        {
          location:
            `Quincy, MA`
          ,
          image: 'https://photos.zillowstatic.com/fp/8baff5efee66ebb9f98b7c1aff63b3cc-cc_ft_768.jpg'
        },
        {
          location:
            `Revere, MA`
          ,
          image: 'https://photos.zillowstatic.com/fp/778e20e10c1e19a330b8554eff8aa103-cc_ft_768.jpg'
        },
        {
          location:
            `Somerville, MA`
          ,
          image: 'https://photos.zillowstatic.com/fp/a57a854c7e3f0f27ec06003eeadf9a93-cc_ft_768.jpg'
        },
        {
          location:
            `Taunton, MA`
          ,
          image: 'https://photos.zillowstatic.com/fp/2065e12a9d1dc7972913187a74d2402d-cc_ft_768.jpg'
        },
        {
          location:
            `Waltham, MA`
          ,
          image: 'https://photos.zillowstatic.com/fp/a24ad59a9d26e7cce639d104c3e3fdfd-cc_ft_768.jpg'
        },
        {
          location:
            `Weymouth Town, MA`
          ,
          image: 'https://photos.zillowstatic.com/fp/c812e39fe7f5c1cb0ad96c036578477b-cc_ft_384.jpg'
        },
        {
          location:
            `Baton Rouge, LA`
          ,
          image: 'https://photos.zillowstatic.com/fp/9c2a162ad19b9b6cb6e746012cee47ec-cc_ft_768.jpg'
        },
        {
          location:
            `Bossier City, LA`
          ,
          image: 'https://photos.zillowstatic.com/fp/52fcbdab779e43cc6723208dd51683af-cc_ft_768.jpg'
        },
        {
          location:
            `Kenner, LA`
          ,
          image: 'https://photos.zillowstatic.com/fp/4ed213d74cac046760257a097948c9d4-cc_ft_768.jpg'
        },
        {
          location:
            `Lafayette, LA`
          ,
          image: 'https://photos.zillowstatic.com/fp/3dd7790c7fbb02417e3d33fb69cf522c-cc_ft_768.jpg'
        },
        {
          location:
            `Lake Charles, LA`
          ,
          image: 'https://photos.zillowstatic.com/fp/ce9dea3eb779d28620dc66d701eadb9e-cc_ft_768.jpg'
        },
        {
          location:
            `New Orleans, LA`
          ,
          image: 'https://photos.zillowstatic.com/fp/7a64fd9243fd4f80a59eb300d46b08d5-cc_ft_768.jpg'
        },
        {
          location:
            `Shreveport, LA`
          ,
          image: 'https://photos.zillowstatic.com/fp/95cf6e7d9e42ca57a0c7260a0d3cff2b-cc_ft_768.jpg'
        },
        {
          location:
            `Boise, ID`
          ,
          image: 'https://photos.zillowstatic.com/fp/356a14ba2328a402200f0a75c0872c6e-cc_ft_768.jpg'
        },
        {
          location:
            `Caldwell, ID`
          ,
          image: 'https://photos.zillowstatic.com/fp/fc99d55cb7c242aae6ed2ceeecdbe258-cc_ft_768.jpg'
        },
        {
          location:
            `Coeur d'Alene, ID`
          ,
          image: 'https://photos.zillowstatic.com/fp/28c16b58b902bff5c74567bba922e309-cc_ft_768.jpg'
        },
        {
          location:
            `Idaho Falls, ID`
          ,
          image: 'https://photos.zillowstatic.com/fp/1100ad46136616853e29703b42e9861e-cc_ft_768.jpg'
        },
        {
          location:
            `Meridian, ID`
          ,
          image: 'https://photos.zillowstatic.com/fp/8b129d7cb29f2a4c4d1e0cae8f24d800-cc_ft_768.jpg'
        },


        {
          location:
            `Nampa, ID`
          ,
          image: 'https://photos.zillowstatic.com/fp/b2e231e645e64bcbabe49830853104f4-cc_ft_768.jpg'
        },
        {
          location:
            `Pocatello, ID`
          ,
          image: 'https://photos.zillowstatic.com/fp/5b79a7ab8e3b15e7efd3cb383d0e761c-cc_ft_768.jpg'
        },
        {
          location:
            `Twin Falls, ID`
          ,
          image: 'https://photos.zillowstatic.com/fp/4a2fa36d63162e4e058377a7e6637593-cc_ft_768.jpg'
        },
        {
          location:
            `Blue Springs, MO`
          ,
          image: 'https://photos.zillowstatic.com/fp/26bcbec84098f8b6f1842d349595eeda-cc_ft_768.jpg'
        },
        {
          location:
            `Florissant, MO`
          ,
          image: 'https://photos.zillowstatic.com/fp/937498af2a39850d0a75140f45455864-cc_ft_768.jpg'
        },
        {
          location:
            `Jefferson City, MO`
          ,
          image: 'https://photos.zillowstatic.com/fp/0762302d31647b02463c45b68345550e-cc_ft_768.jpg'
        },
        {
          location:
            `Joplin, MO`
          ,
          image: 'https://photos.zillowstatic.com/fp/b2701d3cb7d2b55ae9e3f6a748591fbe-cc_ft_768.jpg'
        },
        {
          location:
            `Kansas City, MO`
          ,
          image: 'https://photos.zillowstatic.com/fp/6f0ff9421331533047ac544f78220e70-cc_ft_768.jpg'
        },
        {
          location:
            `Lee's Summit, MO`
          ,
          image: 'https://photos.zillowstatic.com/fp/ce0f7d184ca5f037c8eb9f9a6193d783-cc_ft_768.jpg'
        },
        {
          location:
            `O'Fallon, MO`
          ,
          image: 'https://photos.zillowstatic.com/fp/f089d66bebd13fbad068d9da85bd9683-cc_ft_768.jpg'
        },
        {
          location:
            `Saint Charles, MO`
          ,
          image: 'https://photos.zillowstatic.com/fp/85efc4b51a9cbb18dd5c41e2fc35d931-cc_ft_768.jpg'
        },
        {
          location:
            `Saint Joseph, MO`
          ,
          image: 'https://photos.zillowstatic.com/fp/ebf4bf2fa196c2b947564c554b66477b-cc_ft_768.jpg'
        },
        {
          location:
            `Saint Louis, MO`
          ,
          image: 'https://photos.zillowstatic.com/fp/9757762d9071673a1c913dd8b3b4388d-cc_ft_768.jpg'
        },
        {
          location:
            `Saint Peters, MO`
          ,
          image: 'https://photos.zillowstatic.com/fp/a1383b7ca2d744b533935bbc34056363-cc_ft_768.jpg'
        },
        {
          location:
            `Springfield, MO`
          ,
          image: 'https://photos.zillowstatic.com/fp/ec430972ed73b3b1035c45914e9aacb4-cc_ft_768.jpg'
        },
        {
          location:
            `Bismarck, ND`
          ,
          image: 'https://photos.zillowstatic.com/fp/cc3a24b597ac2372ccd2a6d60dda54c8-cc_ft_768.jpg'
        },
        {
          location:
            `Grand Forks, ND`
          ,
          image: 'https://photos.zillowstatic.com/fp/0b602ac3fff5e86975bc18375e985eba-cc_ft_768.jpg'
        },
        {
          location:
            `Birmingham, AL`
          ,
          image: 'https://photos.zillowstatic.com/fp/a2fa2a1aea14ee7150e4a7b188f3eb9c-cc_ft_768.jpg'
        },
        {
          location:
            `Dothan, AL`
          ,
          image: 'https://photos.zillowstatic.com/fp/e1829d842775a35cfba9cf9867f70891-cc_ft_768.jpg'
        },
        {
          location:
            `Hoover, AL`
          ,
          image: 'https://photos.zillowstatic.com/fp/838fa0ac62aad99ac0920c364bcdd9eb-cc_ft_768.jpg'
        },
        {
          location:
            `Huntsville, AL`
          ,
          image: 'https://photos.zillowstatic.com/fp/1f3412175da5d073bb19afbed20cfcf6-cc_ft_768.jpg'
        },
        {
          location:
            `Mobile, AL`
          ,
          image: 'https://photos.zillowstatic.com/fp/a7a20f9a6c6e53d5b447aa1c1fc9bbc5-cc_ft_768.jpg'
        },
        {
          location:
            `Montgomery, AL`
          ,
          image: 'https://photos.zillowstatic.com/fp/6092c7a0974e5cba7a966067238ae601-cc_ft_768.jpg'
        },
        {
          location:
            `Tuscaloosa, AL`
          ,
          image: 'https://photos.zillowstatic.com/fp/10351833a1730fd861cf32198dc2828d-cc_ft_768.jpg'
        },
        {
          location:
            `Billings, MT`
          ,
          image: 'https://photos.zillowstatic.com/fp/4eb8a1e265197f9cf3cd6d6403be89d5-cc_ft_768.jpg'
        },
        {
          location:
            `Great Falls, MT`
          ,
          image: 'https://photos.zillowstatic.com/fp/7d7e9ddc0ebd565f5398c0034b85dc37-cc_ft_768.jpg'
        },
        {
          location:
            `Helena, MT`
          ,
          image: 'https://photos.zillowstatic.com/fp/0f644ea4f29525cdb6a54107d15655d0-cc_ft_768.jpg'
        },
        {
          location:
            `Missoula, MT`
          ,
          image: 'https://photos.zillowstatic.com/fp/37deec0719fef48be5c2899fae7a5bfc-cc_ft_768.jpg'
        },
        {
          location:
            `Berwyn, IL`
          ,
          image: 'https://photos.zillowstatic.com/fp/11887fc4c5e5f7e028e2109eeefa09de-cc_ft_768.jpg'
        },
        {
          location:
            `Champaign, IL`
          ,
          image: 'https://photos.zillowstatic.com/fp/8ebbf004b8dc817f2e8e885a6ab64489-cc_ft_768.jpg'
        },
        {
          location:
            `Chicago, IL`
          ,
          image: 'https://photos.zillowstatic.com/fp/a91840b0f99a299d75ef337945634b2b-cc_ft_768.jpg'
        },
        {
          location:
            `Decatur, IL`
          ,
          image: 'https://photos.zillowstatic.com/fp/f5e1f35ebd97b74ab6f96190e3e62d56-cc_ft_768.jpg'
        },
        {
          location:
            `Des Plaines, IL`
          ,
          image: 'https://photos.zillowstatic.com/fp/99353f54a681c9d2e09308b56e59689f-cc_ft_768.jpg'
        },
        {
          location:
            `Elgin, IL`
          ,
          image: 'https://photos.zillowstatic.com/fp/70b5c7b0d488e3e78ba35faa678ee4ce-cc_ft_768.jpg'
        },
        {
          location:
            `Evanston, IL`
          ,
          image: 'https://photos.zillowstatic.com/fp/dbce886f3ee2d3a8d69dd2c96ef65174-cc_ft_768.jpg'
        },
        {
          location:
            `Joliet, IL`
          ,
          image: 'https://photos.zillowstatic.com/fp/179a56cd1a8138eeb52e375cb58131c1-cc_ft_768.jpg'
        },
        {
          location:
            `Naperville, IL`
          ,
          image: 'https://photos.zillowstatic.com/fp/945681bfc5ffa513dc1bd1ccfc5fb70a-cc_ft_768.jpg'
        },
        {
          location:
            `Rockford, IL`
          ,
          image: 'https://photos.zillowstatic.com/fp/4ad72094c6c0facae7ecaf69d8c149cf-cc_ft_768.jpg'
        },
        {
          location:
            `Springfield, IL`
          ,
          image: 'https://photos.zillowstatic.com/fp/29695ee25ae51086c989e5898c46ec5f-cc_ft_768.jpg'
        },
        {
          location:
            `Waukegan, IL`
          ,
          image: 'https://photos.zillowstatic.com/fp/0e2c825689a38095fbbbbca9dca03f2b-cc_ft_768.jpg'
        },
        {
          location:
            `Wheaton, IL`
          ,
          image: 'https://photos.zillowstatic.com/fp/7b7b50f8d89c70ba51f3b328fb871981-cc_ft_768.jpg'
        },
        {
          location:
            `Bentonville, AR`
          ,
          image: 'https://photos.zillowstatic.com/fp/2b7b60a2c40f0f156af8a4456c9908be-cc_ft_768.jpg'
        },
        {
          location:
            `Conway, AR`
          ,
          image: 'https://photos.zillowstatic.com/fp/e22e79fa598e7e710e4fa190ad07577f-cc_ft_768.jpg'
        },
        {
          location:
            `Fort Smith, AR`
          ,
          image: 'https://photos.zillowstatic.com/fp/a5ba3a3d02f7313f106f8b7859fb4565-cc_ft_768.jpg'
        },
        {
          location:
            `Jonesboro, AR`
          ,
          image: 'https://photos.zillowstatic.com/fp/7fd110906baf212fcfb2f58306660ec4-cc_ft_768.jpg'
        },
        {
          location:
            `Little Rock, AR`
          ,
          image: 'https://photos.zillowstatic.com/fp/3f6c4fdb352c6a3cff0b0d368d131a2d-cc_ft_768.jpg'
        },
        {
          location:
            `North Little Rock, AR`
          ,
          image: 'https://photos.zillowstatic.com/fp/afdbc6c04bee10a02e8eae5db6780502-cc_ft_768.jpg'
        },
        {
          location:
            `Rogers, AR`
          ,
          image: 'https://photos.zillowstatic.com/fp/03a3d7533f0f1d988ceabbce1833987c-cc_ft_768.jpg'
        },
        {
          location:
            `Springdale, AR`
          ,
          image: 'https://photos.zillowstatic.com/fp/f3abec27ff71e71d8ce82f58d357703c-cc_ft_768.jpg'
        },
        {
          location:
            `Beaverton, OR`
          ,
          image: 'https://photos.zillowstatic.com/fp/01d7f438bdeffc042c6d5997420f0fbc-cc_ft_768.jpg'
        },
        {
          location:
            `Bend, OR`
          ,
          image: 'https://photos.zillowstatic.com/fp/2c66179456b5a8bc3a349d72d20b0542-cc_ft_768.jpg'
        },
        {
          location:
            `Corvallis, OR`
          ,
          image: 'https://photos.zillowstatic.com/fp/f791f2209955e96515449affb6ce7680-cc_ft_768.jpg'
        },
        {
          location:
            `Gresham, OR`
          ,
          image: 'https://photos.zillowstatic.com/fp/692d076fc0ee26e643fb737b3864ff21-cc_ft_768.jpg'
        },
        {
          location:
            `Hillsboro, OR`
          ,
          image: 'https://photos.zillowstatic.com/fp/545671704d21dcd060fc49379c6694b7-cc_ft_768.jpg'
        },
        {
          location:
            `Medford, OR`
          ,
          image: 'https://photos.zillowstatic.com/fp/52e45fb714433cb49bcdb0e08cca6552-cc_ft_768.jpg'
        },
        {
          location:
            `Portland, OR`
          ,
          image: 'https://photos.zillowstatic.com/fp/73440fd2897037a0fbba694db39ab91c-cc_ft_768.jpg'
        },
        {
          location:
            `Salem, OR`
          ,
          image: 'https://photos.zillowstatic.com/fp/29ec87c41002e66ff4ec33b2ceb03eba-cc_ft_768.jpg'
        },
        {
          location:
            `Tigard, OR`
          ,
          image: 'https://photos.zillowstatic.com/fp/7d84308291965465d1ecb8a39d71ebed-cc_ft_768.jpg'
        },
        {
          location:
            `Bayonne, NJ`
          ,
          image: 'https://photos.zillowstatic.com/fp/dfbbf3c5c5fbd5c770274e678fae5e77-cc_ft_768.jpg'
        },
        {
          location:
            `Camden, NJ`
          ,
          image: 'https://photos.zillowstatic.com/fp/8c0c557417938081a0ccfb4030fc6062-cc_ft_768.jpg'
        },


        {
          location:
            `Clifton, NJ`
          ,
          image: 'https://photos.zillowstatic.com/fp/6b7e13cc2578c979b1c0e8ae132a494a-cc_ft_768.jpg'
        },
        {
          location:
            `East Orange, NJ`
          ,
          image: 'https://photos.zillowstatic.com/fp/96a81bb899f34b49b1f45b6cc488bc25-cc_ft_768.jpg'
        },
        {
          location:
            `Elizabeth, NJ`
          ,
          image: 'https://photos.zillowstatic.com/fp/82c895b14be41370d20745a5d1ea73f9-cc_ft_768.jpg'
        },
        {
          location:
            `Hoboken, NJ`
          ,
          image: 'https://photos.zillowstatic.com/fp/f48342f66725b1cd3d9fef28905271d3-cc_ft_768.jpg'
        },
        {
          location:
            `Jersey City, NJ`
          ,
          image: 'https://photos.zillowstatic.com/fp/5b857d7f1551b793b07b5583f57848d0-cc_ft_768.jpg'
        },
        {
          location:
            `New Brunswick, NJ`
          ,
          image: 'https://photos.zillowstatic.com/fp/9d7b8d090ce41e26d5ca4badfa3c728b-cc_ft_768.jpg'
        },
        {
          location:
            `Newark, NJ`
          ,
          image: 'https://photos.zillowstatic.com/fp/6fd2a0ba2ac3dae7948fdc0250fdbe5e-cc_ft_768.jpg'
        },
        {
          location:
            `Passaic, NJ`
          ,
          image: 'https://photos.zillowstatic.com/fp/660e76236a8b3bfda82ee8132edc13cc-cc_ft_768.jpg'
        },
        {
          location:
            `Paterson, NJ`
          ,
          image: 'https://photos.zillowstatic.com/fp/a380a09b5e92ad6dc16a86a3d67c108e-cc_ft_768.jpg'
        },
        {
          location:
            `Perth Amboy, NJ`
          ,
          image: 'https://photos.zillowstatic.com/fp/699326fcad2ca9145d397a4862164069-cc_ft_768.jpg'
        },
        {
          location:
            `Plainfield, NJ`
          ,
          image: 'https://photos.zillowstatic.com/fp/45e2c710878305cc675ca1c072693f50-cc_ft_768.jpg'
        },
        {
          location:
            `Trenton, NJ`
          ,
          image: 'https://photos.zillowstatic.com/fp/afaa558009ce9679715fc926c9d95304-cc_ft_768.jpg'
        },
        {
          location:
            `Vineland, NJ`
          ,
          image: 'https://photos.zillowstatic.com/fp/f5fa9d3100e7abe2888f982cb5b5bc75-cc_ft_768.jpg'
        },
        {
          location:
            `Bartlett, TN`
          ,
          image: 'https://photos.zillowstatic.com/fp/c465426f144daabd2353a4bdaa4d0293-cc_ft_768.jpg'
        },
        {
          location:
            `Chattanooga, TN`
          ,
          image: 'https://photos.zillowstatic.com/fp/22519c044d9ffb4e8af4b171f8704b0c-cc_ft_768.jpg'
        },


        {
          location:
            `Clarksville, TN`
          ,
          image: 'https://photos.zillowstatic.com/fp/8094598c78d0d089fd5ec3cb86bfa4ad-cc_ft_768.jpg'
        },
        {
          location:
            `Franklin, TN`
          ,
          image: 'https://photos.zillowstatic.com/fp/b1b0cd7fc0748a27727ff8586ce586df-cc_ft_768.jpg'
        },
        {
          location:
            `Hendersonville, TN`
          ,
          image: 'https://photos.zillowstatic.com/fp/4833693d6816579f2b8a10e18b41223b-cc_ft_768.jpg'
        },
        {
          location:
            `Johnson City, TN`
          ,
          image: 'https://photos.zillowstatic.com/fp/d7e2507460f627f2f1dd99863b2d49ec-cc_ft_768.jpg'
        },
        {
          location:
            `Kingsport, TN`
          ,
          image: 'https://photos.zillowstatic.com/fp/da6ddb41b1fc0c0cc70bf35daf38f637-cc_ft_768.jpg'
        },
        {
          location:
            `Knoxville, TN`
          ,
          image: 'https://photos.zillowstatic.com/fp/422fd842688a8619422b321e87bb9246-cc_ft_768.jpg'
        },
        {
          location:
            `Memphis, TN`
          ,
          image: 'https://photos.zillowstatic.com/fp/4801e799a9a22f95e9ab62fda11de151-cc_ft_768.jpg'
        },
        {
          location:
            `Murfreesboro, TN`
          ,
          image: 'https://photos.zillowstatic.com/fp/fbaf746aa9f9a997d502fbd498690647-cc_ft_768.jpg'
        },
        {
          location:
            `Nashville, TN`
          ,
          image: 'https://photos.zillowstatic.com/fp/1e98fd6dc374db6c1b91caa61f1cbe1e-cc_ft_768.jpg'
        },
        {
          location:
            `Avondale, AZ`
          ,
          image: 'https://photos.zillowstatic.com/fp/4dc07c7adf277f5badce2e1f2ff497d9-cc_ft_768.jpg'
        },


        {
          location:
            `Buckeye, AZ`
          ,
          image: 'https://photos.zillowstatic.com/fp/e6aa1d17e70f7a5d4e953f216fb88efe-cc_ft_768.jpg'
        },
        {
          location:
            `Casa Grande, AZ`
          ,
          image: 'https://photos.zillowstatic.com/fp/269ca25dc9b35ed1242fd6ee171df225-cc_ft_768.jpg'
        },
        {
          location:
            `Chandler, AZ`
          ,
          image: 'https://photos.zillowstatic.com/fp/b0b1ed7c55649626123a8615429ad382-cc_ft_768.jpg'
        },
        {
          location:
            `Flagstaff, AZ`
          ,
          image: 'https://photos.zillowstatic.com/fp/9a1b1b72915dfdc4eb5c4498152f5239-cc_ft_768.jpg'
        },
        {
          location:
            `Glendale, AZ`
          ,
          image: 'https://photos.zillowstatic.com/fp/1fc2e18c085fa3884e687333571907e5-cc_ft_768.jpg'
        },
        {
          location:
            `Goodyear, AZ`
          ,
          image: 'https://photos.zillowstatic.com/fp/ec8d68f05de538ca6f78db18d5117456-cc_ft_768.jpg'
        },
        {
          location:
            `Lake Havasu City, AZ`
          ,
          image: 'https://photos.zillowstatic.com/fp/f615606a039bd38443f2d730cdfd679b-cc_ft_768.jpg'
        },
        {
          location:
            `Maricopa, AZ`
          ,
          image: 'https://photos.zillowstatic.com/fp/6742141468d919061afaf246e35b2428-cc_ft_768.jpg'
        },
        {
          location:
            `Mesa, AZ`
          ,
          image: 'https://photos.zillowstatic.com/fp/9ab11ea62558db876f0a913d3c417e0b-cc_ft_768.jpg'
        },
        {
          location:
            `Peoria, AZ`
          ,
          image: 'https://photos.zillowstatic.com/fp/129a40e0546595dbf0f25dd467360ef2-cc_ft_768.jpg'
        },
        {
          location:
            `Phoenix, AZ`
          ,
          image: 'https://photos.zillowstatic.com/fp/44a776b2b44070477f1599e6649d0ea4-cc_ft_768.jpg'
        },
        {
          location:
            `Scottsdale, AZ`
          ,
          image: 'https://photos.zillowstatic.com/fp/ed24d851d4deb4ad47eeef228cf6933a-cc_ft_768.jpg'
        },
        {
          location:
            `Surprise, AZ`
          ,
          image: 'https://photos.zillowstatic.com/fp/ec09827a2f920cca8d435ed95cdfd993-cc_ft_768.jpg'
        },
        {
          location:
            `Tempe, AZ`
          ,
          image: 'https://photos.zillowstatic.com/fp/fe2b9b1c9c9046a5cd9c41c1fceb4baa-cc_ft_768.jpg'
        },
        {
          location:
            `Tucson, AZ`
          ,
          image: 'https://photos.zillowstatic.com/fp/cbc474fc841a45a8cacdf99a49912fd9-cc_ft_768.jpg'
        },
        {
          location:
            `Casper, WY`
          ,
          image: 'https://photos.zillowstatic.com/fp/6df3dbf1ff81c46ebfcd09133f416b73-cc_ft_768.jpg'
        },
        {
          location:
            `Cheyenne, WY`
          ,
          image: 'https://photos.zillowstatic.com/fp/2bef28cec8fe7c59eaf85b06a69fbf06-cc_ft_768.jpg'
        },
        {
          location:
            `Charleston, WV`
          ,
          image: 'https://photos.zillowstatic.com/fp/f208698ad3a7fe927d17862718b14439-cc_ft_768.jpg'
        },
        {
          location:
            `Charleston, SC`
          ,
          image: 'https://photos.zillowstatic.com/fp/7edfd0997d6313a8cf161b232c59aa01-cc_ft_768.jpg'
        },
        {
          location:
            `Columbia, SC`
          ,
          image: 'https://photos.zillowstatic.com/fp/00f2b00546e2c3b4391dc5e83a9fe447-cc_ft_768.jpg'
        },
        {
          location:
            `North Charleston, SC`
          ,
          image: 'https://photos.zillowstatic.com/fp/d988c46c1a6697cda3d649ab9814ea28-cc_ft_768.jpg'
        },
        {
          location:
            `Rock Hill, SC`
          ,
          image: 'https://photos.zillowstatic.com/fp/2fed96fb149bf0b8797460c36456c875-cc_ft_768.jpg'
        },
        {
          location:
            `Carson City, NV`
          ,
          image: 'https://photos.zillowstatic.com/fp/c103f35743a2923334e12671b60581cc-cc_ft_768.jpg'
        },
        {
          location:
            `Henderson, NV`
          ,
          image: 'https://photos.zillowstatic.com/fp/058fcc1b0f3c2cc1d34d829b31e4a7d8-cc_ft_768.jpg'
        },
        {
          location:
            `Las Vegas, NV`
          ,
          image: 'https://photos.zillowstatic.com/fp/11617a12161cc770991e2e84d93b2ee8-cc_ft_768.jpg'
        },
        {
          location:
            `North Las Vegas, NV`
          ,
          image: 'https://photos.zillowstatic.com/fp/75987693afe4cf93364e871aaf835910-cc_ft_768.jpg'
        },
        {
          location:
            `Reno, NV`
          ,
          image: 'https://photos.zillowstatic.com/fp/7ab8d5f9a186402f00ab2bb41478b079-cc_ft_768.jpg'
        },
        {
          location:
            `Sparks, NV`
          ,
          image: 'https://photos.zillowstatic.com/fp/b1b0cd7fc0748a27727ff8586ce586df-cc_ft_768.jpg'
        },
        {
          location:
            `Broken Arrow, OK`
          ,
          image: 'https://photos.zillowstatic.com/fp/5662730173fedb0b3b09257ccb79f0ef-cc_ft_768.jpg'
        },
        {
          location:
            `Edmond, OK`
          ,
          image: 'https://photos.zillowstatic.com/fp/b64d8e4a15cb1790370ce7ac6dccc0ab-cc_ft_768.jpg'
        },
        {
          location:
            `Lawton, OK`
          ,
          image: 'https://photos.zillowstatic.com/fp/269f4d21e109e3f32883ec7f43d64bf2-cc_ft_768.jpg'
        },
        {
          location:
            `Midwest City, OK`
          ,
          image: 'https://photos.zillowstatic.com/fp/2815fa86283ce538a379f879e0cbb95d-cc_ft_768.jpg'
        },
        {
          location:
            `Moore, OK`
          ,
          image: 'https://photos.zillowstatic.com/fp/b097d6057ed4999af5191f7a0ffbedf6-cc_ft_768.jpg'
        },
        {
          location:
            `Norman, OK`
          ,
          image: 'https://photos.zillowstatic.com/fp/28a671555a90c7481a1f149de158b339-cc_ft_768.jpg'
        },
        {
          location:
            `Oklahoma City, OK`
          ,
          image: 'https://photos.zillowstatic.com/fp/c12603ef46c84ee1dcf1ef4e435de0f6-cc_ft_768.jpg'
        },
        {
          location:
            `Stillwater, OK`
          ,
          image: 'https://photos.zillowstatic.com/fp/1a8d85dcbb1680068c7d08ca60ee78f7-cc_ft_768.jpg'
        },
        {
          location:
            `Tulsa, OK`
          ,
          image: 'https://photos.zillowstatic.com/fp/230b7647d73a72261fb73e0cdfe16712-cc_ft_768.jpg'
        },
        {
          location:
            `Bridgeport, CT`
          ,
          image: 'https://photos.zillowstatic.com/fp/0e3b329424d9a036e852e4614c939038-cc_ft_768.jpg'
        },
        {
          location:
            `Bristol, CT`
          ,
          image: 'https://photos.zillowstatic.com/fp/c27d61b31a2a65e073f810c0430687a3-cc_ft_768.jpg'
        },
        {
          location:
            `Danbury, CT`
          ,
          image: 'https://photos.zillowstatic.com/fp/d736ad16f5c229900352356f67fdfdd1-cc_ft_768.jpg'
        },
        {
          location:
            `Hartford, CT`
          ,
          image: 'https://photos.zillowstatic.com/fp/08fd0a8ecbe4683a9b7b6a74b0c7bbf7-cc_ft_768.jpg'
        },
        {
          location:
            `Meriden, CT`
          ,
          image: 'https://photos.zillowstatic.com/fp/07e56bbc1aff16b59570e6aa5ba8a0fd-cc_ft_768.jpg'
        },
        {
          location:
            `Milford City, CT`
          ,
          image: 'https://photos.zillowstatic.com/fp/25bac3c00466d2b07c35be09f2401037-cc_ft_768.jpg'
        },
        {
          location:
            `Milford, CT`
          ,
          image: 'https://photos.zillowstatic.com/fp/4cf6ff52465589bc641c8cf40967309b-cc_ft_768.jpg'
        },
        {
          location:
            `New Britain, CT`
          ,
          image: 'https://photos.zillowstatic.com/fp/659b0d85dde6edb4911789eae8f02c7a-cc_ft_768.jpg'
        },
        {
          location:
            `New Haven, CT`
          ,
          image: 'https://photos.zillowstatic.com/fp/e39348ae8baf34eca2f450dba06b35df-cc_ft_768.jpg'
        },
        {
          location:
            `Stamford, CT`
          ,
          image: 'https://photos.zillowstatic.com/fp/4f368bf0f4486fe253dcb4398668d5a7-cc_ft_768.jpg'
        },
        {
          location:
            `Waterbury, CT`
          ,
          image: 'https://photos.zillowstatic.com/fp/054a6181bca6b2105834bb611b5d9bc8-cc_ft_768.jpg'
        },
        {
          location:
            `West Haven, CT`
          ,
          image: 'https://photos.zillowstatic.com/fp/e420c072ad977e774cdf6b0015036b31-cc_ft_768.jpg'
        },
        {
          location:
            `Bowling Green, KY`
          ,
          image: 'https://photos.zillowstatic.com/fp/73c615193f9847881459a67f59546273-cc_ft_768.jpg'
        },
        {
          location:
            `Frankfort, KY`
          ,
          image: 'https://photos.zillowstatic.com/fp/347d6bbc64d63862a4930e6ac9c16d6d-cc_ft_768.jpg'
        },
        {
          location:
            `Owensboro, KY`
          ,
          image: 'https://photos.zillowstatic.com/fp/cf01cfd703b3cbf859be76b739e39afa-cc_ft_768.jpg'
        },
        {
          location:
            `Dover, DE`
          ,
          image: 'https://photos.zillowstatic.com/fp/8653393f4a6ffb3c0794e4632da5cd64-cc_ft_768.jpg'
        },
        {
          location:
            `Cranston, RI`
          ,
          image: 'https://photos.zillowstatic.com/fp/dd4b0b1754084203fadc9508877f0083-cc_ft_768.jpg'
        },
        {
          location:
            `Pawtucket, RI`
          ,
          image: 'https://photos.zillowstatic.com/fp/63e0f6de79eae59d767ba780a8eb09d2-cc_ft_768.jpg'
        },
        {
          location:
            `Providence, RI`
          ,
          image: 'https://photos.zillowstatic.com/fp/2895f2d7a7000b54d1804f232c74e14b-cc_ft_768.jpg'
        },
        {
          location:
            `Warwick, RI`
          ,
          image: 'https://photos.zillowstatic.com/fp/aeb7bebc5524460ebce22a7fd226ebf6-cc_ft_768.jpg'
        },
        {
          location:
            `Concord, NH`
          ,
          image: 'https://photos.zillowstatic.com/fp/0aa51a80bd42e7074cece6c839695cd1-cc_ft_768.jpg'
        },
        {
          location:
            `Manchester, NH`
          ,
          image: 'https://photos.zillowstatic.com/fp/dbb22891ea34396f8b413ccbbd14ba96-cc_ft_768.jpg'
        },
        {
          location:
            `Nashua, NH`
          ,
          image: 'https://photos.zillowstatic.com/fp/ba142dd00d9c96f81d63c7e5a1b8df14-cc_ft_768.jpg'
        },
        {
          location:
            `Gulfport, MS`
          ,
          image: 'https://photos.zillowstatic.com/fp/6efb712966a19dd2a0179b858e4eb5fe-cc_ft_768.jpg'
        },
        {
          location:
            `Jackson, MS`
          ,
          image: 'https://photos.zillowstatic.com/fp/c6bafe287eee332c53a6c29e2475406e-cc_ft_768.jpg'
        },
        {
          location:
            `Southaven, MS`
          ,
          image: 'https://photos.zillowstatic.com/fp/57ce1c19fbcea3d2340c6a21c552fedb-cc_ft_768.jpg'
        },
        {
          location:
            `Grand Island, NE`
          ,
          image: 'https://photos.zillowstatic.com/fp/6fb04e31a43d85bffec5b1927e7be14a-cc_ft_768.jpg'
        },
        {
          location:
            `Lincoln, NE`
          ,
          image: 'https://photos.zillowstatic.com/fp/5209f6c96104e1b4a4abb2cd844c6833-cc_ft_768.jpg'
        },
        {
          location:
            `Omaha, NE`
          ,
          image: 'https://photos.zillowstatic.com/fp/82927397248fdf2ccf3b748f83f2309b-cc_ft_768.jpg'
        },
        {
          location:
            `Herriman, UT`
          ,
          image: 'https://photos.zillowstatic.com/fp/783189d5645ee10da7cc8f8795680704-cc_ft_768.jpg'
        },
        {
          location:
            `Layton, UT`
          ,
          image: 'https://photos.zillowstatic.com/fp/498a1202751950eb41408d167ff4e8a6-cc_ft_768.jpg'
        },
        {
          location:
            `Lehi, UT`
          ,
          image: 'https://photos.zillowstatic.com/fp/f00a8adf3b083715249f413765451ca8-cc_ft_768.jpg'
        },
        {
          location:
            `Logan, UT`
          ,
          image: 'https://photos.zillowstatic.com/fp/c35e35471289a0f2eee1c68e00e43b36-cc_ft_768.jpg'
        },
        {
          location:
            `Millcreek, UT`
          ,
          image: 'https://photos.zillowstatic.com/fp/bcdd0b71c154258c84974b54305edfc5-cc_ft_768.jpg'
        },
        {
          location:
            `Ogden, UT`
          ,
          image: 'https://photos.zillowstatic.com/fp/6734752f1edb7cfa4ad05e732742a284-cc_ft_768.jpg'
        },
        {
          location:
            `Orem, UT`
          ,
          image: 'https://photos.zillowstatic.com/fp/e2ee69555c8131f4f2ec2c3e4059a9eb-cc_ft_768.jpg'
        },
        {
          location:
            `Saint George, UT`
          ,
          image: 'https://photos.zillowstatic.com/fp/e9a8714f590f703126f63f9466650cb2-cc_ft_768.jpg'
        },
        {
          location:
            `Salt Lake City, UT`
          ,
          image: 'https://photos.zillowstatic.com/fp/2aba3ab133efd15597a2e4896b7c9869-cc_ft_768.jpg'
        },
        {
          location:
            `Sandy, UT`
          ,
          image: 'https://photos.zillowstatic.com/fp/3340ae5d0d5d8a4a0dd73a0ade17bb83-cc_ft_768.jpg'
        },


        {
          location:
            `South Jordan, UT`
          ,
          image: 'https://photos.zillowstatic.com/fp/ab09463fc84ae3dbf7b52914189583c0-cc_ft_768.jpg'
        },
        {
          location:
            `Taylorsville, UT`
          ,
          image: 'https://photos.zillowstatic.com/fp/0a61d405ce21a734a7f7f91a8c45c76b-cc_ft_768.jpg'
        },
        {
          location:
            `West Valley City, UT`
          ,
          image: 'https://photos.zillowstatic.com/fp/7cbdceda7183baa1df6bbe2b001cfae6-cc_ft_768.jpg'
        },
        {
          location:
            `Lawrence, KS`
          ,
          image: 'https://photos.zillowstatic.com/fp/203b0684cf3da3e9ab3275d807ea1acf-cc_ft_768.jpg'
        },
        {
          location:
            `Lenexa, KS`
          ,
          image: 'https://photos.zillowstatic.com/fp/ea47a57a65ca220d275d1862b02a12bb-cc_ft_768.jpg'
        },
        {
          location:
            `Manhattan, KS`
          ,
          image: 'https://photos.zillowstatic.com/fp/2e624fd1c3e4538eff57acacd83fee9b-cc_ft_768.jpg'
        },
        {
          location:
            `Olathe, KS`
          ,
          image: 'https://photos.zillowstatic.com/fp/ca59af5a394c88710127d4faa433f793-cc_ft_768.jpg'
        },
        {
          location:
            `Overland Park, KS`
          ,
          image: 'https://photos.zillowstatic.com/fp/8ae339a7c8805e04e6cfd4f09986fc3a-cc_ft_768.jpg'
        },
        {
          location:
            `Shawnee, KS`
          ,
          image: 'https://photos.zillowstatic.com/fp/37baabb506db8273947b8cfcf7c0f552-cc_ft_768.jpg'
        },
        {
          location:
            `Topeka, KS`
          ,
          image: 'https://photos.zillowstatic.com/fp/2a01ae775e71dbdf364b8489f57b66a3-cc_ft_768.jpg'
        },
        {
          location:
            `Wichita, KS`
          ,
          image: 'https://photos.zillowstatic.com/fp/f57a58c71eb6d7b617e8b185863e07a7-cc_ft_768.jpg'
        },
        {
          location:
            `Juneau, AK`
          ,
          image: 'https://photos.zillowstatic.com/fp/09db2934bd6a8447b3f5b6685ebf2ab0-cc_ft_768.jpg'
        },
        {
          location:
            `Honolulu, HI`
          ,
          image: 'https://photos.zillowstatic.com/fp/335798272060437dba4bc7d5d11b6346-cc_ft_768.jpg'
        },
        {
          location:
            `Montpelier, VT`
          ,
          image: 'https://photos.zillowstatic.com/fp/d36367d4db5d0aecba0277ed05716fa8-cc_ft_768.jpg'
        },
        {
          location:
            `Pierre, SD`
          ,
          image: 'https://photos.zillowstatic.com/fp/e54781bff7c9b7a5b17c7466ad85f219-cc_ft_768.jpg'
        },
        {
          location:
            `Rapid City, SD`
          ,
          image: 'https://photos.zillowstatic.com/fp/472f78bb50f3223248a68a347f52d27d-cc_ft_768.jpg'
        },
        {
          location:
            `Sioux Falls, SD`
          ,
          image: 'https://photos.zillowstatic.com/fp/b30bf2964fa725fa8a9a7aac94545bd0-cc_ft_768.jpg'
        },
        {
          location:
            `Washington, DC`
          ,
          image: 'https://photos.zillowstatic.com/fp/5dde0950b065813af4a7200cb9e40e24-cc_ft_768.jpg'
        },
      ]);
    });
};