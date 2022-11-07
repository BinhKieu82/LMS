import { useContext } from 'react'
import Header from '../components/layout/Header.js'
import NavbarUserMenu from '../components/layout/NavbarUserMenu'
import { AuthContext } from '../contexts/AuthContext'
import Potrait from '../assets/BK_Pic_1200x1200px.jpg'

const CV = () => {
	const {
		authState: { isAuthenticated }
	} = useContext(AuthContext)

	return (
		<>		
			{ isAuthenticated ? <NavbarUserMenu />:<Header />}
			<>
				<div id="cv" className="instaFade">
					<div className="mainDetails">
						<div id="headshot" className="quickFade">
							<img src={Potrait} alt="Bruce Kieu" />
						</div>
						
						<div id="name">
							<h2 className="quickFade delayTwo">Bruce Kieu - Resume</h2>
							<h3 className="quickFade delayThree">Geophysicist - Datascientist - Web Developer</h3>
						</div>
						
						<div id="contactDetails" className="quickFade delayFour">
							<ul>
								<li><i className='fa fa-linkedin'></i> <a href="www.linkedin.com/in/binh-kieu/">www.linkedin.com/in/binh-kieu/</a></li>
								<li><i className="fa fa-github"></i> <a href=" https://github.com/BinhKieu82"> https://github.com/BinhKieu82  </a></li>
								<li><span>&#9993;</span> <a href="mailto:brucekieu@gmail.com" target="_blank">brucekieu@gmail.com</a></li>
								<li><span>🏠</span> <a href="http://www.bloggs.com">www.bloggs.com</a></li>
							</ul>
						</div>
						<div className="clear"></div>
					</div>
				
					<div id="mainArea" className="quickFade delayFive">
						<section>
							<article>
								<div className="sectionTitle">
									<h1>Personal Profile</h1>
								</div>
								
								<div className="sectionContent">
									<p>I am a motivated & committed MERN stack Web Developer with more than 1 year deep diving in many responsive web design projects. I also have 2.5 years intensive working on real-world data science projects from quantitative trading to education and commercial fields. Additionally I have 14 year experience as a Geophysicist in multi discipline Oil & Gas exploration and development projects.</p>
									<p>I have a well-rounded skill set in frontend & backend web development using MongoDB/SQL, Express/Django, React & NodeJS frameworks. And experience in Data Science Method (cleaning, visualization, feature engineering, statistics inference and modeling).</p>
									<p>Further, I’m a recognized expert in problem-solving and an excellent communicator with the ability to communicate and coordinate effectively across disciplinary and cultural boundaries.</p>
								</div>
							</article>
							<div className="clear"></div>
						</section>		
						
						<section>
							<div className="sectionTitle">
								<h1>Professional Experience</h1>
							</div>
							
							<div className="sectionContent">
								<article>
									<h2>Web Development</h2>
									<p className="subDetails">Responsive Web Design - Full Stack</p>
									<p><a href="https://blog.pixeltree.ca/the-software-develop-idea-to-revitalize-downtown-calgary/">YYCHacks 2022, Calgary, Alberta, Canada. 3rd prize team, "Revitalization Calgary" Hackathon.</a></p>
									<p>Able to quickly create a <a href="https://github.com/BinhKieu82/Ubiqum_SportyShop">web</a>/<a href="https://github.com/BinhKieu82/MERN">mobile</a> application/prototype by Plotly-Dash framework or full-stack MERN.</p>
									<p>Passionate on programing using JavaScript & Python via VSCode IDE. </p>
									<p>Comfortable with CLI base OSs: Unix/Ubuntu; Versions control Github & Containerization technique Docker</p>
								</article>
								
								<article>
									<h2>Data Analytics</h2>
									<p className="subDetails">Petroleum  - Quant Analysis - Commerical</p>
									<p>14 years analyzing geophysical big data (seismic & well logs) using professional industry software to derive useful information for prospect evaluation & field development.</p>
									<p>2.5 years deep pythoning to mine (EDA & visualization) many type of data: well logs, seismic, stocks & other high dimensional data by well-known libraries/frameworks to summarize key characteristics & <a href="https://github.com/BinhKieu82/Springboard_Capstone2/blob/master/notebooks/05_finalversion.ipynb">discover patterns & insights</a>.</p>
									<p>Familiar with Airflow (create pipeline (ETL) from data-lake to data warehouse), MySQL/MongoDB, GoogleStudio/ PowerBI (create dashboard) and Big Data tools (PySpark, Google BigQuery)</p>
								</article>
								
								<article>
									<h2>Machine Learning</h2>
									<p className="subDetails">Geociences - Quant Trading</p>
									<p>Frequently building ML models for supervised regression, classNameification & unsupervised clustering purposes: log prediction (Linear, Random Forest, DNN, RNN LSTM, CNN Unet), <a href="https://www.smartscitech.com/index.php/IOGR/article/view/1203">seismic rock property inversion (CNN Unet)</a>, <a href="https://github.com/BinhKieu82/springboard_capstone3/blob/master/momentum_vnmarket.ipynb">multivariate stock returns regression</a> (OLS, ARIMA, Random Forest), stocks risk exposure clustering by PCA … with effective storytelling to stakeholders.</p>
								</article>

								<article>
									<h2>Academic</h2>
									<p className="subDetails">Geosciences - Oil & Gas</p>
									<p>Eagerly exposing to & absorbing new technology & challenges.</p>
									<p>Familiar with writing technical papers (<a href="https://www.smartscitech.com/index.php/IOGR/article/view/1203">DOI:10.14800/IOGR.1203</a>; <a href="https://onepetro.org/SPECTCE/proceedings-abstract/15CTCE/All-15CTCE/SPE-177322-MS/181788">SPE-177322-MS</a>; <a href="https://www.inderscienceonline.com/doi/abs/10.1504/IJOGCT.2021.117452">IJOGCT .2021.117452</a>; <a href="http://stdjet.scienceandtechnology.com.vn/index.php/stdjet/article/view/853">SI177-SI183</a>).</p>
									<p>Willing to technology transfer to colleagues (CLJOC, PVEP POC, SLB Malaysia & Beijing, VietSovPetro JV), young professionals (SPE technical days) & students (Visiting lecture at HCMUT, HCMUoS, PVU).</p>
								</article>
							</div>
							<div className="clear"></div>
						</section>
								
						<section>
							<div className="sectionTitle">
								<h1>Key Skills</h1>
							</div>
							
							<div className="sectionContent">
								<ul className="keySkills">
									<li>Analytical thinking</li>
									<li>Problem-solving</li>
									<li>Time-management</li>
									<li>Team work & Agile SCRUM</li>
									<li>Leadership & Accountability</li>
									<li>Effective communication</li>
									<li>Self-study & Detail-oriented</li>
									<li>Knowledge sharing & coaching</li>
								</ul>
							</div>
							<div className="clear"></div>
						</section>
						
						<section>
							<article>
								<div className="sectionTitle">
									<h1>Working History</h1>
								</div>
								
								<div className="sectionContent">
									<p><a href='https://www.petroexplorers.com/pages/overview.php'>PETROEXPLORERS (Calgary, Canada) </a><span>Geophysics Consultant </span><span>Jul 2022 - Now</span></p>
									<p><a href='https://www.steamforvietnam.org/'>STEAM for VIETNAM </a><span> Data Analysis Intern </span><span>May 2022 - Now</span></p>
									<p><a href='http://www.linkedin.com/company/cuu-long-joint-operating-company/'>CUU LONG JOC (HCMC, Vietnam)</a><span>Sr Geophysicist to QI Specialist</span><span>Sep 2015 - Aug 2018</span></p>
									<p><a href='http://www.pvep.com.vn/'>PVEP POC (HCMC, Vietnam) </a><span> Geophysicist to Geophysics Lead  </span><span>Oct 2011 - Aug 2015</span></p>
									<p><a href='http://www.slb.com/'>SCHLUMBERGER (HCMC, Vietnam) </a><span> BH Geophysicist to GFE BH Geophysicist </span><span>Nov 2005 - Sep 2011</span></p>
									<p><a href='http://www.pvep.com.vn/'>PVEP (HCMC, Vietnam) </a><span> Exploration Geophysicist </span><span>Sep 2005 - Oct 2005</span></p>
								</div>
							</article>
							<div className="clear"></div>
						</section>		

						<section>
							<article>
								<div className="sectionTitle">
									<h1>Achievements</h1>
								</div>
								
								<div className="sectionContent">
									<p>2022: YYCHacks 2022, Calgary, Alberta, Canada. 3rd prize team, "Revitalization Calgary" Hackathon</p>
									<p>2012: SPE Vietnam Section Committee Board Member Recognition</p>
									<p>2011: Schlumberger DCS excellent in execution for look-head SVWD projects of Salamander Vietnam (Cat Ba-1X); Premier Oil Vietnam (QMV-1X); CCLT Beijing, China</p>
									<p>2010: General Field Engineer promotion Grade 11</p>
									<p>Schlumberger DCS excellent in execution for SVWD Idemitsu project (DN-1X)</p>
									<p>2009: Performed By Schlumberger bronze award on providing excellent real-time seismic processing for Daewoo E&P exploration drilling campaign, Myanmar (Pearl-1, Pearl West -1A, Thundar-1)</p>									
								</div>
							</article>
							<div className="clear"></div>
						</section>		
						
						<section>
							<div className="sectionTitle">
								<h1>Qualifications</h1>
							</div>
							
							<div className="sectionContent">
								<article>
									<p className="subDetails">Master of Engineer</p>
									<p><a href='https://www.hcmut.edu.vn/en'>Applied Petroleum Geology & Drilling Technology </a><span>HCM University of Technology, VN </span><span>2009 - 2012</span></p>
									<p className="subDetails">Engineer</p>
									<p><a href='https://humg.edu.vn/en/Pages/home.aspx'>Geophysics </a><span>Hanoi University of Mining & Geology, VN </span><span>2000 - 2005</span></p>
								</article>
							</div>
							<div className="clear"></div>
						</section>
						
						<section>
							<article>
								<div className="sectionTitle">
									<h1>Training & Certifications</h1>
								</div>
								
								<div className="sectionContent">
								<p><a href='https://https://www.amii.ca/'>Alberta Machine Intelligence Institute - AMII </a><span>Machine Learning Technician </span><span> Sept - Nove 2022</span></p>
								<p><a href='https://www.linkedin.com/school/springboard/'>Data Science Career Track </a><span>SpringBoard, CA, USA </span><span>Sep2020 - Dec2021</span></p>
								<p><a href='https://www.udacity.com/course/deep-reinforcement-learning-nanodegree--nd893'>Deep Reinforcement Learning NanoDegree </a><span>Udacity, CA, USA </span><span>Dec2021 - Apr2022</span></p>
								<p><a href='https://www.udacity.com/course/ai-for-trading--nd880'>AI for Trading NanoDegree </a><span>Udacity, CA, USA </span><span>Dec2020 - May2021</span></p>
								<p><a href='http://www.linkedin.com/school/ubiqum-academy/'>MERN Stack Web Development </a><span>Ubiqum, Madrid, Spain </span><span>Feb2019 - May2020</span></p>
								<p><a href='https://www.datacamp.com/'>EDA, PySpark, Pandas, Matplotlib, Seabone, SK-learn  </a><span>Datacamp </span><span>2020 - 2022</span></p>
								<p><a href='https://www.udemy.com/course/interactive-python-dashboards-with-plotly-and-dash/'>Interactive Python Dashboards with Plotly and Dash </a><span>Udemy </span><span>Nov2021</span></p>
								<p><a href='https://www.udacity.com/course/aws-machine-learning-foundations--ud065'>AWS Machine Learning Foundations </a><span>Udacity, CA, USA </span><span>Oct2021</span></p>
								<p><a href='https://www.iil.com/'>Agile and Scrum Fundamentals </a><span>International Institute for Learning </span><span>Aug2020</span></p>
								<p><a href='https://www.iil.com/'>Project Leadership Skills </a><span>International Institute for Learning </span><span>Aug2020</span></p>
								<p><a href='http://www.jvn.edu.vn/'>Fundamentals of Big Data & Machine Learning </a><span>JVN institute, HCMC, VN </span><span>Apr2018 - Jun2018</span></p>
								<p><a href='http://www.slb.com/'>DCS Sales for none-Sales Position </a><span>Schlumberger, Kuala Lumpur, Malaysia </span><span>May2011</span></p>
								<p><a href='http://www.slb.com/'>OFS3 People Management Skills </a><span>Schlumberger, Kuala Lumpur, Malaysia </span><span>Sep2009</span></p>
								
								</div>
							</article>
							<div className="clear"></div>
						</section>		

						<section>
							<article>
								<div className="sectionTitle">
									<h1>Social Activities</h1>
								</div>
								
								<div className="sectionContent">
									<p></p>
								</div>
							</article>
							<div className="clear"></div>
						</section>		

					</div>
				</div>
			</>
		</>	
	)		
}

export default CV
