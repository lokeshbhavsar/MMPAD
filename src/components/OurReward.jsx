import React from 'react'
import './OurReward.css'
import rewardImage from '../assets/Images/rewards.gif';
import rewardsImage from '../assets/Images/reward.gif';
import champImage from '../assets/Images/champ.gif';
import Navbar from './header/Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
const OurReward = () => {
  const URL =useLocation()
  console.log("url",URL);
  return (
    <div className='ourReward'>
        <Navbar/>
      <div className='reward-cards'>
        <div className='reward-card0 reward-card'>
            <img src={rewardImage}/>
            <h4>Total Rewards</h4>
            <h5>128</h5>
            <p>Avail your rewards now</p>
            <span>Get your Rewards</span>
        </div>
        <div className='reward-card1 reward-card'>
            <img src={rewardsImage}/>
            <h4>Available Rewards</h4>
            <h5>45</h5>
            <p>Claim your rewards now</p>
            <span>Claim your Rewards</span>
        </div>
        <div className='reward-card2 reward-card'>
            <img src={champImage}/>
            <h4>Total teams</h4>
            <h5>12</h5>
            <p>Select your team</p>
            <span>Be a Member</span>
        </div>
      </div>
      
      <div className='reward-table'>
        <h2><span>MMIT’s</span> Referral Incentives</h2>
        <div className='level-btn'>
        <div class="dropdown drop">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="23" viewBox="0 0 21 23" fill="none">
<g clip-path="url(#clip0_511_1038)">
<path d="M5.05005 8.59009H0.925049C0.742712 8.59009 0.567844 8.66252 0.438913 8.79145C0.309982 8.92038 0.237549 9.09525 0.237549 9.27759L0.237549 18.9026C0.237549 19.0849 0.309982 19.2598 0.438913 19.3887C0.567844 19.5177 0.742712 19.5901 0.925049 19.5901H5.05005C5.23239 19.5901 5.40725 19.5177 5.53618 19.3887C5.66512 19.2598 5.73755 19.0849 5.73755 18.9026V9.27759C5.73755 9.09525 5.66512 8.92038 5.53618 8.79145C5.40725 8.66252 5.23239 8.59009 5.05005 8.59009ZM4.36255 18.2151H1.61255V9.96509H4.36255V18.2151ZM12.6125 0.340088H8.48755C8.30521 0.340088 8.13034 0.412521 8.00141 0.541452C7.87248 0.670383 7.80005 0.845252 7.80005 1.02759V18.9026C7.80005 19.0849 7.87248 19.2598 8.00141 19.3887C8.13034 19.5177 8.30521 19.5901 8.48755 19.5901H12.6125C12.7949 19.5901 12.9698 19.5177 13.0987 19.3887C13.2276 19.2598 13.3 19.0849 13.3 18.9026V1.02759C13.3 0.845252 13.2276 0.670383 13.0987 0.541452C12.9698 0.412521 12.7949 0.340088 12.6125 0.340088ZM11.925 18.2151H9.17505V1.71509H11.925V18.2151ZM20.175 11.3401H16.05C15.8677 11.3401 15.6928 11.4125 15.5639 11.5415C15.435 11.6704 15.3625 11.8453 15.3625 12.0276V18.9026C15.3625 19.0849 15.435 19.2598 15.5639 19.3887C15.6928 19.5177 15.8677 19.5901 16.05 19.5901H20.175C20.3574 19.5901 20.5323 19.5177 20.6612 19.3887C20.7901 19.2598 20.8625 19.0849 20.8625 18.9026V12.0276C20.8625 11.8453 20.7901 11.6704 20.6612 11.5415C20.5323 11.4125 20.3574 11.3401 20.175 11.3401ZM19.4875 18.2151H16.7375V12.7151H19.4875V18.2151ZM0.237549 20.9651H5.73755V22.3401H0.237549V20.9651ZM7.80005 20.9651H13.3V22.3401H7.80005V20.9651ZM15.3625 20.9651H20.8625V22.3401H15.3625V20.9651Z" fill="#D8D8D8"/>
</g>
<defs>
<clipPath id="clip0_511_1038">
<rect width="20.625" height="22" fill="white" transform="translate(0.237549 0.340088)"/>
</clipPath>
</defs>
</svg> Level
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">All Levels</a></li>
    <li><a class="dropdown-item" href="#">Level 1</a></li>
    <li><a class="dropdown-item" href="#">Level 2</a></li>
  </ul>
</div>
        </div>
        <div className='table-container'>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Sr.No</th>
      <th scope="col">Address</th>
      <th scope="col">Amount</th>
      <th scope="col">Level</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>0x20B8179f9b05F140586Ba18D6Adf9017Ba29A45B</td>
      <td>$67,789</td>
      <td><span>Level-1</span></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>0x20B8179f9b05F140586Ba18D6Adf9017Ba29A45B</td>
      <td>$67,789</td>
      <td><span>Level-2</span></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>0x20B8179f9b05F140586Ba18D6Adf9017Ba29A45B</td>
      <td>$67,789</td>
      <td><span>Level-3</span></td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>0x20B8179f9b05F140586Ba18D6Adf9017Ba29A45B</td>
      <td>$67,789</td>
      <td><span>Level-4</span></td>
    </tr>
  </tbody>
</table>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default OurReward
