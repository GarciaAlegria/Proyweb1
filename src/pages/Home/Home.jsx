import React from 'react';
import { Navbar, Rectangulo1, Cartas } from '@components';
import { Button } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { styles, carrousel, cartasaling } from './Home.module.css';

const Home = () => {
  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    infinite: true, // establecer infinite en true para el bucle
    fade: true,
  };

  const hotelCards = [
    {
      imageSrc:
        'https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_1680/public/Mental_Health_HomePage_Banner.jpg?itok=18azSZmU',
    },
    {
      imageSrc:
        'https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_1680/public/VENUS23_POSTHeader_1440x450%402x-2.jpg?itok=2WnNoXcf',
    },
    {
      imageSrc:
        'https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_1680/public/HomepageCarousel_PCadoption_022322.jpg?itok=UscBjjou',
    },
    {
      imageSrc:
        'https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_1680/public/HomepageCarousel_Sustainability_022322.jpg?itok=C_FJsSKU',
    },
  ];

  return (
    <div className={styles}>
      <Navbar />
      <div className={carrousel}>
        <Slider {...sliderSettings}>
          {hotelCards.map((card, index) => (
            <div key={index}>
              <img alt={card.title} src={card.imageSrc} width='1400' height='500' />
            </div>
          ))}
        </Slider>
        <Rectangulo1 />
        <div style={{ backgroundColor: 'white', height: '200px', width: '100%', position: 'absolute', top: '700px', left: '0', right: '0' }}>
        <p style={{fontFamily: 'Antenna', color: 'black', fontSize: '24px', margin: '1', fontWeight: '700', textAlign: 'center' }}>
            Explore Our Cat Food
          </p>
          <div style={{fontFamily: 'inherit', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
            <Button className='button' variant='outline-light' style={{borderColor: 'black',  margin: '10px', color: 'black', backgroundColor: 'white', width: '150px' }}>
              KITTEN
            </Button>
            <Button className='button' variant='outline-light' style={{borderColor: 'black',  margin: '10px', color: 'black', backgroundColor: 'white', width: '150px' }}>
              SENIOR CAT
            </Button>
            <Button className='button' variant='outline-light' style={{borderColor: 'black',  margin: '10px', color: 'black', backgroundColor: 'white', width: '150px' }}>
              WET CAT
            </Button>
            <Button className='button' variant='outline-light' style={{borderColor: 'black',  margin: '10px', color: 'black', backgroundColor: 'white', width: '150px' }}>
              DRY CAT
            </Button>
            <Button className='button' variant='outline-light' style={{borderColor: 'black',  margin: '10px', color: 'black', backgroundColor: 'white', width: '150px' }}>
              GRAIN FREE
            </Button>
            <Button className='button' variant='outline-light' style={{ margin: '10px', color: 'white', backgroundColor: 'grey', width: '150px' }}>
              VIEW ALL
            </Button>
            </div>
        </div>
        <div style={{ backgroundColor: 'white', height: '300px', width: '92.2%', position: 'absolute', top: '900px', left: '0', right: '0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 50px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
          <p style={{ fontFamily: 'Antenna', color: 'black', fontSize: '30px', margin: '0 0 20px 0', fontWeight: '700' }}>
            Find the Best Food for Your Dog or Cat
          </p>
          <p style={{ fontFamily: 'inherit', color: 'black', fontSize: '18px', margin: '0 0 20px 0' }}>
            Get your personalized pet food recommendation with the Pet Food Finder tool.
          </p>
          <div style={{ display: 'flex' }}>
            <Button className='button' variant='outline-light' style={{ borderColor: 'white', margin: '0 10px 0 0', color: 'white', backgroundColor: 'red', width: '150px' }}>
              Find my pets
            </Button>
            <Button className='button' variant='outline-light' style={{ borderColor: 'white', margin: '0', color: 'white', backgroundColor: 'red', width: '150px' }}>
              Learn more
            </Button>
          </div>
        </div>
        <div>
          <img src='https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_1080/public/2022-04/PFF_PurinaHomepage_Module_ExpertSeal_2.png?itok=OvWCfOub' alt='Pet food' style={{ width: '400px', height: '300px' }} />
        </div>
      </div>
      <div style={{ backgroundColor: '#dcdcdc', height: '200px', width: '100%', position: 'absolute', top: '1200px', left: '0', right: '0' }}>
        <p style={{fontFamily: 'Antenna', color: 'black', fontSize: '24px', margin: '1', fontWeight: '700', textAlign: 'center' }}>
            FAQs
          </p>
          <p style={{fontFamily: 'Antenna', color: 'black', fontSize: '20px', margin: '0', marginTop: '-20px', fontWeight: '200', textAlign: 'center' }}>
          Select a Topic
          </p>
          <div style={{fontFamily: 'inherit', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginTop: '30px' }}>
            <Button className='button' variant='outline-light' style={{borderColor: 'black',  margin: '10px', color: 'black', backgroundColor: 'white', width: '190px' }}>
              DOG PRODUCTS
            </Button>
            <Button className='button' variant='outline-light' style={{borderColor: 'black',  margin: '10px', color: 'black', backgroundColor: 'white', width: '190px' }}>
              CAT PRODUCTS
            </Button>
            <Button className='button' variant='outline-light' style={{borderColor: 'black',  margin: '10px', color: 'black', backgroundColor: 'white', width: '190px' }}>
              CONTACT US
            </Button>
            </div>
        </div>
        <div style={{ backgroundColor: 'white', height: '800px', width: '100%', position: 'absolute', top: '1400px', left: '0', right: '0' }}>
        <p style={{fontFamily: 'Antenna', color: 'black', fontSize: '45px', margin: '1', fontWeight: '700', textAlign: 'center' }}>
        Purina: Providing Nutritious Dog and Cat Food for Your Pet
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '50px 0' }}>
          <div>
            <img src='https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_960/public/2021-01/PC_ProPlan_Chicken%26Rice_500x300.jpg?itok=H2xCfSVJ' alt='Purina Pro Plan' style={{ width: '560px', height: '350px' }} />
            <p style={{ fontFamily: 'inherit', color: 'black', fontSize: '24px', margin: '20px 0', fontWeight: '700', textAlign: 'center' }}>
              Purina Pro Plan Adult Shredded Blend Chicken & Rice Formula
            </p>
            <p style={{ fontFamily: 'inherit', color: 'black', fontSize: '16px', margin: '0 0 20px 0', textAlign: 'center' }}>
              I have been feeding my dog this food for a while now. They love it and do great on it. There fur is shiny and skin healthy. A past food I was feeding my dogs gave one of them hotspots. I switched to the Pro Plan and it cleared right up.
            </p>
            <button className='button' style={{ margin: '20px', color: 'white', backgroundColor: 'red', width: '300px', height: '40px', fontSize: '15px', fontWeight: '500' }}>
            EXPRORE PRO PLAN PRODUCTS
          </button>
          </div>
          <div>
            <img src='https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_960/public/2021-11/fancy-feast-wet-cat-food-review.jpg?itok=Itx9-NXS' alt='Purina Pro Plan' style={{ width: '560px', height: '350px' }} />
            <p style={{ fontFamily: 'inherit', color: 'black', fontSize: '24px', margin: '20px 0', fontWeight: '700', textAlign: 'center' }}>
              Purina Pro Plan Adult Shredded Blend Lamb & Rice Formula
            </p>
            <p style={{ fontFamily: 'inherit', color: 'black', fontSize: '16px', margin: '0 0 20px 0', textAlign: 'center' }}>
              I have been feeding my dog this food for a while now. They love it and do great on it. There fur is shiny and skin healthy. A past food I was feeding my dogs gave one of them hotspots. I switched to the Pro Plan and it cleared right up.
            </p>
            <button className='button' style={{ margin: '20px', color: 'white', backgroundColor: 'red', width: '300px', height: '40px', fontSize: '15px', fontWeight: '500' }}>
            EXPLORE FANCY FEAST PRODUCTS
          </button>
          </div>
          </div>
          </div>
          <div style={{ backgroundColor: 'white', height: '590px', width: '100%', position: 'absolute', top: '2200px', left: '0', right: '0' }}>
          <p style={{fontFamily: 'Antenna', color: 'black', fontSize: '25px', margin: '2px', fontWeight: '700', textAlign: 'center' }}>
          What Guides Us
          </p>
          <p style={{fontFamily: 'Antenna', color: 'black', fontSize: '20px', margin: '0', fontWeight: '200', textAlign: 'center' }}>
          We shape the future of Health and Well-being for pets & people through three simple pursuits.
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '50px 0' }}>
          <div>
            <img src='https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_600/public/04_Passion_Pursuit_Passion_500x300-2.png?itok=WamVfxix' alt='Purina Pro Plan' style={{borderRadius:'50%', width: '350px', height: '240px' }} />
            <p style={{ fontFamily: 'inherit', color: 'black', fontSize: '24px', margin: '20px 0', fontWeight: '700', textAlign: 'center' }}>
            Pets Are Our Passion
            </p>
            <p style={{ fontFamily: 'inherit', color: 'black', fontSize: '16px', margin: '0 0 20px 0', textAlign: 'center' }}>
            We are connecting pets and people. We are building strong communities. We are shaping a better world.
            </p>
            <p style={{color: 'red', textDecoration: 'underline', cursor: 'pointer'}}>KNOW MORE</p>
          </div>
          <div>
            <img src='https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_600/public/05_Safety_500x300.png?itok=9JznGyLT' alt='Purina Pro Plan' style={{ borderRadius:'50%', width: '350px', height: '240px' }} />
            <p style={{ fontFamily: 'inherit', color: 'black', fontSize: '24px', margin: '20px 0', fontWeight: '700', textAlign: 'center' }}>
            Safety Is Our Promise
            </p>
            <p style={{ fontFamily: 'inherit', color: 'black', fontSize: '16px', margin: '0 0 20px 0', textAlign: 'center' }}>
            We are exceeding safety standards. We are committing to quality. We are leading the industry.</p>
            <p style={{color: 'red', textDecoration: 'underline', cursor: 'pointer'}}>DISCOVER HOW</p>
          </div>
          <div>
            <img src='https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_600/public/06_Pursuit_Innovation_500x300.png?itok=9PjwBgZx' alt='Purina Pro Plan' style={{borderRadius:'50%', width: '350px', height: '240px' }} />
            <p style={{ fontFamily: 'inherit', color: 'black', fontSize: '24px', margin: '20px 0', fontWeight: '700', textAlign: 'center' }}>
            Innovation Is Our Pledge
            </p>
            <p style={{ fontFamily: 'inherit', color: 'black', fontSize: '16px', margin: '0 0 20px 0', textAlign: 'center' }}>
            We are discovering new possibilities. We are making nutritional breakthroughs. We are advancing the lives of pets. </p>
            <p style={{color: 'red', textDecoration: 'underline', cursor: 'pointer'}}>Learn More</p>
          </div>
          </div>
          </div>

          <div style={{ backgroundColor: 'white', height: '400px', width: '100%', position: 'absolute', top: '2790px', left: '0', right: '0' }}>
          <img src='https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_1680/public/purina-dog-and-cat-expertise-articles-homepage.jpg?itok=3dLBR-0l' alt='Purina Pro Plan' style={{ width: '100%', height: '400px' }}
          />
          </div>

          


          <div style={{ backgroundColor: '#dcdcdc', height: '600px', width: '100%', position: 'absolute', top: '3190px', left: '0', right: '0' }}>
            <p style={{fontFamily: 'Antenna', color: 'black', fontSize: '24px', margin: '1', fontWeight: '700', textAlign: 'center' }}>
            Better Together
              </p>
              <p style={{fontFamily: 'Antenna', color: 'black', fontSize: '20px', margin: '0', marginTop: '-20px', fontWeight: '200', textAlign: 'center' }}>
              Whether you have a question or are searching for tips, we’re committed to providing the answers you need to continue living your best life together.
              </p>
              <div style={{textalign: 'center', marginright: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '50px 0' }}>
                <div className={cartasaling}>
                  <Cartas limagen ="https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_960/public/purina-when-to-switch-from-kitten-to-cat-food-1200x300.jpg?itok=q6kUQnrc" titulito = "KITTEN FEEDING" parafe = "When to Switch from Kitten Food to Cat FoodKitten food is specially formulated to meet your kittens unique nutritional needs. Learn when to make the switch from kitten to adult wet and dry cat food." link = "https://www.purina.com/articles/kitten/feeding/when-to-switch-from-kitten-to-cat-food" />
                  <Cartas limagen ="https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_960/public/2021-02/how-to-feed-your-dog.jpg?itok=6GgWRN0b" titulito = "FEEDING" parafe = "Dog Feeding Chart: How Much Should I Feed My Dog? How much food should you feed your dog? Purina has a helpful dog feeding chart so you can determine how much your dog should eat. Feeding your dog the right amount of food each day helps ensure he gets the nutrition he needs." link = "https://www.purina.com/articles/dog/feeding/how-much-should-i-feed-my-dog" />
                  <Cartas limagen ="https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_960/public/how-much-to-feed-a-puppy-feeding-guide-and-chart-1200x300.jpg?itok=kdeeHneO" titulito = "PUPPY FEEDING" parafe = "How Much Should I Feed My Puppy? A Complete Puppy Feeding Guide with Chart Wondering how much to feed your puppy? Our experts put together a puppy feeding chart and guide to help. Find out how much food your puppy needs at Purina.com." link = "https://www.purina.com/articles/kitten/feeding/when-to-switch-from-kitten-to-cat-food" /> 
                  </div>
                </div>
              </div>



        </div>
        <div style={{ backgroundColor: '#EEEEEE', height: '850px', width: '1315px', position: 'absolute', top: '3790px', left: '0', right: '0' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px' }}>
            <p style={{ fontFamily: 'Antenna', color: 'black', fontSize: '30px', margin: '0', fontWeight: '700', textAlign: 'center' }}>
              Stay in Touch
            </p>
            <p style={{ fontFamily: 'inherit', color: 'black', fontSize: '20px', margin: '0', textAlign: 'center' }}>
              Sign up today! From training tips to special offers, get the tools you need to keep your pet happy and healthy.
            </p>
            <div style={{flexDirection: 'column', display: 'flex', alignItems: 'center', marginTop: '10px' }}>
              <span style={{ color: 'red', marginLeft: '900px', fontSize: '14px' }}> *Required Field</span>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor='firstName' style={{marginRight: '900px', color: 'black', marginBottom: '5px' }}>First Name</label>
                <input type='text' id='firstName' value={'First Name'}  style={{  backgroundColor: 'white', height: '25px', width: '900px', padding: '5px' }} />
              </div>
              <div style={{ marginLeft: '30px', display: 'flex', flexDirection: 'column' }}>
                <label htmlFor='lastName' style={{ marginTop: '20px', marginRight: '930px', color: 'black', marginBottom: '5px' }}>Last Name</label>
                <input type='text' id='lastName' style={{ backgroundColor: 'white', height: '25px', width: '900px', padding: '5px' }} />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor='email' style={{marginRight: '935px', color: 'black', marginBottom: '5px' }}>Email</label>
                <input type='email' id='email' style={{ backgroundColor: 'white', height: '25px', width: '900px', padding: '5px' }} />
              </div>
              <div style={{marginTop: '20px', marginLeft: '30px', display: 'flex', flexDirection: 'column' }}>
                <label htmlFor='zip' style={{ marginRight: '980px', color: 'black', marginBottom: '5px'}}>Zip</label>
                <input type='text' id='zip' style={{ backgroundColor: 'white', height: '25px', width: '900px', padding: '5px' }} />
              </div>
            </div>
            <label htmlFor='zip' style={{ marginTop: '20px', marginRight: '915px', color: 'black', marginBottom: '5px'}}>My pets</label>
            <div style={{marginRight: '213px', display: 'flex', alignItems: 'left', marginBottom: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', marginRight: '270px' }}>
                <select id='myDogs' style={{backgroundColor: 'white',color: 'black', marginRight: '0px', width: '200px', padding: '5px' }}>
                  <option value=''># of Dogs</option>
                  <option value='dog1'> 1 Dog </option>
                  <option value='dog2'>2 Dogs </option>
                  <option value='dog3'>3 Dogs </option>
                </select>
              </div>
              <div style={{ display: 'flex', marginRight: '90px' }}>
                <select id='myCats' style={{backgroundColor: 'white', color: 'black', width: '200px', padding: '5px' }}>
                  <option value=''># of Cats</option>
                  <option value='cat1'>Cat 1</option>
                  <option value='cat2'>Cat 2</option>
                  <option value='cat3'>Cat 3</option>
                </select>
              </div>
            </div>
            <div style={{ display: 'flex',  flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginRight: '-20px' }}>
                <input type='checkbox' id='newsletters' style={{backgroundColor:'white', margin: ' 9px  ' }} />
                <label htmlFor='newsletters'style={{ marginTop: '10px', marginRight: '915px', color: 'black', marginBottom: '5px'}}>Neither</label>
              </div>
              <div style={{ display: 'flex', alignItems: 'rigth', marginRight: '-800px',marginLeft: '130px' }}>
                <input type='checkbox' id='neither' style={{backgroundColor:'white', margin: '0px',marginRight: '7px' }} />
                <label htmlFor='neither'style={{color: 'red', textDecoration: 'underline', marginTop: '25px', marginRight: '915px', marginBottom: '5px'}}>
                By clicking JOIN NOW I agree to receiving email and other marketing communications from Purina and its brands. I certify that I have read and agree with the Notice At Collection, Terms & Conditions, Privacy Policy and About Our Ads.
                </label>
              </div>
            </div>
            <Button className='button' variant='outline-light' style={{borderRadius: '2%', margin: '10px', color: 'white', backgroundColor: 'grey', width: '150px' }}>
            JOIN NOW
            </Button>
            </div>
            </div>

            <div style={{ backgroundColor: '#424242', height: '310px', width: '1315px', position: 'absolute', top: '4600px', left: '0', right: '0', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
  <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
    <div>
      <div>
        <img src='https://www.purina.com/sites/default/files/new-logo1.png' alt='Purina.com' style={{position: 'absolute', top: '50px', left: '100px', width: '100px', height: '50px' }} />
      </div>
    </div>
  </div>
  <div style={{textAlign: 'left', position: 'absolute', top: '50px', left: '250px', flex: 1, display: 'flex', flexDirection: 'column' }}>
    <div>
      <div>PURINA</div>
      <div>
        <div>Dogs</div>
        <div>Cats</div>
        <div>Nutrition</div>
        <div>Ingredients</div>
        <div>About Purina</div>
        <div>Partners & Services</div>
      </div>
    </div>
  </div>
  <div style={{textAlign: 'left', position: 'absolute', top: '50px', left: '440px', flex: 1, display: 'flex', flexDirection: 'column' }}>
    <div>OUR PRODUCTS</div>
    <div>
      <div>Dry Dog Food</div>
      <div>Wet Dog Food</div>
      <div>Dog Treats</div>
      <div>Wet Cat Food</div>
      <div>Dry Cat Food</div>
      <div>Cat Treats</div>
      <div>Cat Litter</div>
    </div>
  </div>
  <div style={{textAlign: 'left', position: 'absolute', top: '50px', left: '600px',flex: 1, display: 'flex', flexDirection: 'column' }}>
    <div>BRANDS</div>
    <div>
      <div>Dog Brands</div>
      <div>Cat Brands</div>
    </div>
  </div>
  <div style={{textAlign: 'left', position: 'absolute', top: '50px', left: '750px', flex: 1, display: 'flex', flexDirection: 'column' }}>
    <div>HELPFUL LINKS</div>
    <div>
      <div>Offers</div>
      <div>News </div>
      <div>Careers</div>
      <div>Contact Us</div>
      <div>International Sites</div>
      <div>Sitemap</div>
    </div>
  </div>
  <div style={{ position: 'absolute', top: '50px', left: '950px', flex: 1, display: 'flex', flexDirection: 'column' }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src='https://www.pngarts.com/files/16/FB-Icon-Facebook-Logo-Grey-Circle-PNG.png' alt='Facebook' style={{ width: '30px', height: '30px', marginRight: '10px' }} />
      <img src='https://icones.pro/wp-content/uploads/2021/02/icone-twitter-ronde-grise.png' alt='Twitter' style={{ width: '30px', height: '30px', marginRight: '10px' }} />
      <img src='https://www.buscopng.com/wp-content/uploads/2020/08/youtube-gris.png' alt='YouTube' style={{ width: '30px', height: '30px', marginRight: '10px' }} />
      <img src='https://icones.pro/wp-content/uploads/2021/02/instagram-icone-gris.png' alt='Instagram' style={{ width: '30px', height: '30px' }} />
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input type='text' value={'Search...'} style={{ width: '200px', height: '30px', padding: '5px', border: 'none', backgroundColor: 'black', borderRadius: '8%' }} />
      <button style={{ width: '20px', height: '30px', border: 'none', backgroundColor: 'black', color: 'white', marginLeft: '-50px' }}>&#x1F50D;</button>
    </div>
  </div>
</div>
<div style={{ backgroundColor: 'black', height: '110px', width: '1315px', position: 'absolute', top: '4900px', left: '0', right: '0', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
  <div style={{textAlign: 'left', position: 'absolute', top: '20px', left: '400px', flex: 1, display: 'flex', flexDirection: 'column' }}>
    <div>
    <div style={{fontSize: '10px', fontWeight: '700', color: 'grey'}}>All Nestlé Purina trademarks owned by Société des Produits Nestlé S.A., Vevey, Switzerland or are used with permission</div>
    </div>
  </div>
  <div style={{textAlign: 'left', position: 'absolute', top: '50px', left: '70px', flex: 1, display: 'flex', flexDirection: 'column' }}>
    <div>
    <div style={{fontSize: '10px', fontWeight: '100', color: 'grey'}}>Terms & Conditions</div>
    </div>
  </div>
  <div style={{textAlign: 'left', position: 'absolute', top: '40px', left: '160px', flex: 1, display: 'flex', flexDirection: 'column' }}>
    <div>
      <div style={{fontSize: '30px', fontWeight: '100', color: 'grey'}}>|</div>
    </div>
  </div>
  <div style={{textAlign: 'left', position: 'absolute', top: '50px', left: '180px', flex: 1, display: 'flex', flexDirection: 'column' }}>
    <div>
    <div style={{fontSize: '10px', fontWeight: '100', color: 'grey'}}>Notice at Collection</div>
    </div>
  </div>
  <div style={{textAlign: 'left', position: 'absolute', top: '40px', left: '270px', flex: 1, display: 'flex', flexDirection: 'column' }}>
    <div>
      <div style={{fontSize: '30px', fontWeight: '100', color: 'grey'}}>|</div>
    </div>
  </div>
  <div style={{textAlign: 'left', position: 'absolute', top: '50px', left: '280px', flex: 1, display: 'flex', flexDirection: 'column' }}>
    <div>
    <div style={{fontSize: '10px', fontWeight: '100', color: 'grey'}}>Privacy Policy (Updated)</div>
    </div>
  </div>
  <div style={{textAlign: 'left', position: 'absolute', top: '40px', left: '382px', flex: 1, display: 'flex', flexDirection: 'column' }}>
    <div>
      <div style={{fontSize: '30px', fontWeight: '100', color: 'grey'}}>|</div>
    </div>
  </div>
  <div style={{textAlign: 'left', position: 'absolute', top: '50px', left: '390px', flex: 1, display: 'flex', flexDirection: 'column' }}>
    <div>
    <div style={{fontSize: '10px', fontWeight: '100', color: 'grey'}}>Do Not Sell or Share My Personal Information</div>
    </div>
  </div>
  <div style={{textAlign: 'left', position: 'absolute', top: '40px', left: '583px', flex: 1, display: 'flex', flexDirection: 'column' }}>
    <div>
      <div style={{fontSize: '30px', fontWeight: '100', color: 'grey'}}>|</div>
    </div>
  </div>
  <div style={{textAlign: 'left', position: 'absolute', top: '50px', left: '593px', flex: 1, display: 'flex', flexDirection: 'column' }}>
    <div>
    <div style={{fontSize: '10px', fontWeight: '100', color: 'grey'}}>Terms of Sale</div>
    </div>
  </div>
  <div style={{textAlign: 'left', position: 'absolute', top: '40px', left: '650px', flex: 1, display: 'flex', flexDirection: 'column' }}>
    <div>
      <div style={{fontSize: '30px', fontWeight: '100', color: 'grey'}}>|</div>
    </div>
  </div>
  <div style={{textAlign: 'left', position: 'absolute', top: '50px', left: '660px', flex: 1, display: 'flex', flexDirection: 'column' }}>
    <div>
    <div style={{fontSize: '10px', fontWeight: '100', color: 'grey'}}>Linking Policy</div>
    </div>
  </div>
  <div style={{textAlign: 'left', position: 'absolute', top: '40px', left: '720px', flex: 1, display: 'flex', flexDirection: 'column' }}>
    <div>
      <div style={{fontSize: '30px', fontWeight: '100', color: 'grey'}}>|</div>
    </div>
  </div>
  <div style={{textAlign: 'left', position: 'absolute', top: '50px', left: '730px', flex: 1, display: 'flex', flexDirection: 'column' }}>
    <div>
    <div style={{fontSize: '10px', fontWeight: '100', color: 'grey'}}>Copyright Infringement Notification</div>
    </div>
  </div>
  <div style={{textAlign: 'left', position: 'absolute', top: '40px', left: '880px', flex: 1, display: 'flex', flexDirection: 'column' }}>
    <div>
      <div style={{fontSize: '30px', fontWeight: '100', color: 'grey'}}>|</div>
    </div>
  </div>
  <div style={{textAlign: 'left', position: 'absolute', top: '50px', left: '890px', flex: 1, display: 'flex', flexDirection: 'column' }}>
    <div>
    <div style={{fontSize: '10px', fontWeight: '100', color: 'grey'}}>User Generated Content</div>
    </div>
  </div>
  <div style={{textAlign: 'left', position: 'absolute', top: '40px', left: '995px', flex: 1, display: 'flex', flexDirection: 'column' }}>
    <div>
      <div style={{fontSize: '30px', fontWeight: '100', color: 'grey'}}>|</div>
    </div>
  </div>
  <div style={{textAlign: 'left', position: 'absolute', top: '50px', left: '1005px', flex: 1, display: 'flex', flexDirection: 'column' }}>
    <div>
    <div style={{fontSize: '10px', fontWeight: '100', color: 'grey'}}>About Our Ads</div>
    </div>
  </div>
  <div style={{textAlign: 'left', position: 'absolute', top: '40px', left: '1070px', flex: 1, display: 'flex', flexDirection: 'column' }}>
    <div>
      <div style={{fontSize: '30px', fontWeight: '100', color: 'grey'}}>|</div>
    </div>
  </div>
  <div style={{textAlign: 'left', position: 'absolute', top: '50px', left: '1080px', flex: 1, display: 'flex', flexDirection: 'column' }}>
    <div>
    <div style={{fontSize: '10px', fontWeight: '100', color: 'grey'}}>Supply Chains Act</div>
    </div>
  </div>
  <div style={{textAlign: 'left', position: 'absolute', top: '40px', left: '1160px', flex: 1, display: 'flex', flexDirection: 'column' }}>
    <div>
      <div style={{fontSize: '30px', fontWeight: '100', color: 'grey'}}>|</div>
    </div>
  </div>
</div>
</div>
        
  );
};
export default Home;