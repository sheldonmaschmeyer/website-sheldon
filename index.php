<!DOCTYPE html>
<html lang="en"><head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">
  <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
  <meta name="norton-safeweb-site-verification" content="7-7xiqq-b38mayk91gk7lju2b4m1yunwkwf3l2mip0fjm4i5un-1i-ky5lcuvpfymkjunspl1qnpc33wx2v1lxucn7f05s0hzxferv1lxifpvdfcccmskshpqh442zwy">

  <title>Sheldon Maschmeyer</title>

  <!-- Bootstrap core CSS -->
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom fonts for this template -->
  <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i" rel="stylesheet">
  <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet">


  <!-- Custom styles for this template -->
  <link href="css/sheldon.resume.min.css" rel="stylesheet">
<style>

  .headingChange > a:before {
    font-family: 'Font Awesome\ 5 Free';
    float: left;
    content: "\f150\00a0\00a0"; 
  }

  .headingChange > a.collapsed:before {
    font-family: 'Font Awesome\ 5 Free';
    float: left;
    content: "\f152\00a0\00a0";
  }
</style>

</head>
<body id="page-top">

  <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
    <a class="navbar-brand js-scroll-trigger" href="#page-top">
      <span class="d-block d-lg-none">Sheldon Maschmeyer</span>
      <span class="d-none d-lg-block">
        <img class="img-fluid img-profile mx-auto mb-2" src="img/profile.jpg" alt="">
      </span>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#about">Executive Summary</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#experience">Experience</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#skills">Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#volunteering">Volunteering</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#activities">Activities</a>
        </li>
	<li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#lifeGoals">Life Goals</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#education">Education</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://you.23andme.com/published/reports/e670fc51bbde41be9e6a9fa9c165bc9d/?share_id=a550c666da874906" target="_blank">23andMe Ancestry</a>
        </li>
      </ul>
    </div>
  </nav>

  <div class="container-fluid p-0">

    <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
      <div class="w-100">
      <div class="d-lg-none d-xl-none"><img class="img-fluid img-profile mx-auto mb-2" src="img/profile.jpg" alt=""></div>
        <h1 class="mb-0">Sheldon W. B. <span class="text-primary">Maschmeyer</span></h1>
        <div class="subheading mb-0">
        740 Springland Drive, Apartment: 515. Ottawa, Ontario <br> 
        1-613-889-4320  · <a href="mailto:sheldon@maschmeyer.ca">sheldon@maschmeyer.ca</a>
        </div>
        <ul><?php 
            $file = file_get_contents('ExportWeb/profile.html');
            $file = str_replace("•", "<p><li>", $file);
            echo $file;
            ?> </ul>
        <div class="social-icons dont-print p-3" style="width: 200px; float: left">
          Professional Network
          <a href="https://www.linkedin.com/in/sheldonmaschmeyer/">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/sheldonmaschmeyer">
            <i class="fab fa-github"></i>
          </a>
        </div>
        <div class="social-icons dont-print p-3" style="width: 200px; float: left">
          My Ottawa Résumé
          <a href="https://github.com/sheldonmaschmeyer/Resumes/raw/master/primaryResumeOttawa.docx">
            <i class="fas fa-file-word"></i>
          </a>
          <a href="https://github.com/sheldonmaschmeyer/Resumes/raw/master/primaryResumeOttawa.pdf">
            <i class="fas fa-file-pdf"></i>
          </a>
        </div>
        <div class="social-icons dont-print p-3" style="width: 200px; float: left">
          My Toronto Résumé
          <a href="https://github.com/sheldonmaschmeyer/Resumes/raw/master/primaryResumeToronto.docx">
            <i class="fas fa-file-word"></i>
          </a>
          <a href="https://github.com/sheldonmaschmeyer/Resumes/raw/master/primaryResumeToronto.pdf">
            <i class="fas fa-file-pdf"></i>
          </a>
        </div>
      </div>
    </section>

    <hr class="m-0">

    <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
      <div class="w-100">
        <h2 class="mb-5">Experience</h2>

        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="resume-content">
            <h3 class="mb-0">Full Stack Developer </h3>
            <div class="subheading mb-3 headingChange"> <a href="#imrsv" data-toggle="collapse" style="text-decoration:none;"> IMRSV Data Labs. </a></div>
            <div id="imrsv" class="collapse">
            <?php 
            $file = file_get_contents('ExportWeb/exp_imrsv.html');
            $file = str_replace("•", "<li>", $file);
            $file = str_replace("Key Responsibilities:", "<br>Key Responsibilities:<ul>", $file);
            echo $file;
            ?> </ul>
            </div></div>
          <div class="resume-date text-md-right">
            <span class="text-primary">Jan 2021 - Oct 2022 </span>
          </div>
        </div>

        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="resume-content">
            <h3 class="mb-0">Supervisor, Primary Cashier & Merchandiser </h3>
            <div class="subheading mb-3 headingChange"> <a href="#shop" data-toggle="collapse" style="text-decoration:none;"> Shoppers Drug Mart </a></div>
            <div id="shop" class="collapse">
            <?php 
            $file = file_get_contents('ExportWeb/exp_Shop.html');
            $file = str_replace("•", "<li>", $file);
            $file = str_replace("Key Responsibilities:", "<br>Key Responsibilities:<ul>", $file);
            echo $file;
            ?> </ul>
            </div></div>
          <div class="resume-date text-md-right">
            <span class="text-primary">May 2016 - Jan 2021 </span>
          </div>
        </div>
        
        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="resume-content">
            <h3 class="mb-0">IT &amp; Media Arts (Part-Time)</h3>
            <div class="subheading mb-3 headingChange"><a href="#IAM" data-toggle="collapse" style="text-decoration:none;">I-AM Retailer Solutions · i-aminc.com · Abaan &amp; Associates</a></div>
            <div id="IAM" class="collapse">
            <?php 
            $file = file_get_contents('ExportWeb/exp_IAM.html');
            $file = str_replace("•", "<li>", $file);
            $file = str_replace("Key Responsibilities:", "<br>Key Responsibilities:<ul>", $file);
            echo $file;
            ?> </ul>
              </div> 
        </div>
          <div class="resume-date text-md-right">
            <span class="text-primary">June 2008 - September 2020</span>
          </div>
        </div>

        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5 page-break">
          <div class="resume-content">
            <h3 class="mb-0">Field Training &amp; Support Representative<br>Field Service Representative</h3>
            <div class="subheading mb-3 headingChange"><a href="#domVote" data-toggle="collapse" style="text-decoration:none;">Dominion Voting Systems</a></div>
            <div id="domVote" class="collapse">
            <?php 
            $file = file_get_contents('ExportWeb/exp_vot.html');
            $file = str_replace("•", "<li>", $file);
            $file = str_replace("Key Responsibilities:", "<br>Key Responsibilities:", $file);
            $file = str_replace("2018:", "<br>2018:<ul>", $file);
            $file = str_replace("2014:", "</ul>2014:<ul>", $file);
            echo $file;
            ?> </ul>
          </div></div>
          <div class="resume-date text-md-right">
            <span class="text-primary">May 2018 - June 2018 <br> October 2014 &amp; June 2014</span>
          </div>
        </div>

        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="resume-content">
            <h3 class="mb-0">Customer Service Representative</h3> 
            <div class="subheading mb-3 headingChange"><a href="#cdn" data-toggle="collapse" style="text-decoration:none;">Canada Computers</a></div>
            <div id="cdn" class="collapse">
            <?php 
            $file = file_get_contents('ExportWeb/exp_CC.html');
            $file = str_replace("•", "<li>", $file);
            $file = str_replace("Key Responsibilities:", "<br>Key Responsibilities:<ul>", $file);
            echo $file;
            ?> </ul>
          </div></div>
          <div class="resume-date text-md-right">
            <span class="text-primary">June 2014 - August 2015</span>
          </div>
        </div>

        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="resume-content">
            <h3 class="mb-0">Deputy Returning Officer (By-Election)</h3>
            <div class="subheading mb-3 headingChange"><a href="#elec" data-toggle="collapse" style="text-decoration:none;">Elections Canada</a></div>
            <div id="elec" class="collapse">
            <?php 
            $file = file_get_contents('ExportWeb/exp_Elect.html');
            $file = str_replace("•", "<li>", $file);
            $file = str_replace("Key Responsibilities:", "<br>Key Responsibilities:<ul>", $file);
            echo $file;
            ?> </ul>
          </div> </div>
          <div class="resume-date text-md-right">
            <span class="text-primary">September 2014</span>
          </div>
        </div>

        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5 page-break">
          <div class="resume-content">
            <h3 class="mb-0">Sales Associate</h3> 
            <div class="subheading mb-3 headingChange"><a href="#fox" data-toggle="collapse" style="text-decoration:none;">Fox Wireless Comm. (Now Telus)</a></div>
            <div id="fox" class="collapse">
            <?php 
            $file = file_get_contents('ExportWeb/exp_Fox.html');
            $file = str_replace("•", "<li>", $file);
            $file = str_replace("Key Responsibilities:", "<br>Key Responsibilities:<ul>", $file);
            echo $file;
            ?> </ul>
          </div></div>
          <div class="resume-date text-md-right">
            <span class="text-primary">May 2008 - August 2008</span>
          </div>
        </div>

      </div>

    </section>

    <hr class="m-0">

    <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
      <div class="w-100">
        <h2 class="mb-5">Skills</h2>
        <div class="subheading mb-3 headingChange"><a href="#lang" data-toggle="collapse" style="text-decoration:none;"> Programming Languages &amp; Tools</a></div>
        <div id="lang" class="collapse">
        <ul><?php 
            $file = file_get_contents('ExportWeb/skills.html');
            $file = str_replace("•", "<li>", $file);
            echo $file;
            ?> </ul></div>
        <ul class="list-inline dev-icons">
          <li class="list-inline-item">
            <i class="fab fa-java" data-toggle="tooltip" title="Java"></i>
          </li>
          <li class="list-inline-item">
            <img src="img/c.png" data-toggle="tooltip" title="C Programming Language">
          </li>
          <li class="list-inline-item">
            <img src="img/cpp.png" data-toggle="tooltip" title="C++ Programming Language">
          </li>
          <li class="list-inline-item">
            <i class="fab fa-html5" data-toggle="tooltip" title="HTML5"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-css3-alt" data-toggle="tooltip" title="CSS3"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-js-square" data-toggle="tooltip" title="JavaScript"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-python" data-toggle="tooltip" title="Python"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-node" data-toggle="tooltip" title="NodeJS"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-npm" data-toggle="tooltip" title="Node Package Manager"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-linux" data-toggle="tooltip" title="Linux OS"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-windows" data-toggle="tooltip" title="Windows OS"></i>
          </li>
          <li class="list-inline-item">
            <i class="fas fa-network-wired" data-toggle="tooltip" title="Network security: Burp, Wireshark tools"></i>
          </li>
          <li class="list-inline-item">
            <i class="fas fa-terminal" data-toggle="tooltip" title="Shell Script, Bash, Batch, Terminal, CMD, PowerShell"></i>
          </li>
          <li class="list-inline-item">
            <i class="fas fa-database" data-toggle="tooltip" title="Access, SPSS, Oracle SQL, mySQL, MongoDB"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-microsoft" data-toggle="tooltip" title="Office: Word, Excel, Outlook, PowerPoint, Publisher"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-adobe" data-toggle="tooltip" title="Adobe: Photoshop, Premier, Acrobat, Dreamweaver"></i>
          </li>
          <li class="list-inline-item">
            <img src="img/latex.png" data-toggle="tooltip" title="LaTeX: Used for all computer science documents">
          </li>
        </ul>
      </div>
    </section>

    <hr class="m-0">

    <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="volunteering">
        <div class="w-100">
          <h2 class="mb-5">Volunteering & Donations</h2>

          <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="resume-content white-space: pre-wrap;">
            <?php 
              $file = file_get_contents('ExportWeb/volunteer.html');
              echo str_replace("\n","<p>", $file);
            ?>
            </div>
          </div>
        </div>
    </section>

    <hr class="m-0">

    <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="activities">
        <div class="w-100">
          <h2 class="mb-5">Activities</h2>

          <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="resume-content white-space: pre-wrap;">
            <?php 
              $file = file_get_contents('ExportWeb/activities.html');
              echo str_replace("\n","<p>", $file);
            ?>
            </div>
          </div>
        </div>
    </section>

    <hr class="m-0">

    <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="lifeGoals">
      <div class="w-100">
        <h2 class="mb-5">Life Goals</h2>
        <?php 
            $file = file_get_contents('ExportWeb/lifeGoals.html');
            $file = str_replace("•", "<li>", $file);
            echo $file;
            ?> </div>
      </div>
    </section>

    <hr class="m-0">

    <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
      <div class="w-100">
        <h2 class="mb-5">Education</h2>
        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="resume-content">
            <h3 class="mb-0">BS: Computer Science (Minor Sociology)</h3>
            <div class="subheading mb-3 headingChange"><a href="#compSci" data-toggle="collapse" style="text-decoration:none;">Carleton University</a></div>
            <div id="compSci" class="collapse">
            <div class="dont-print"> <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Section</th>
                    <th scope="col">12.00 Points</th>
                    <th scope="col">4.0 Points</th>
                    <th scope="col">Alpha</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Major</td>
                    <td>7.86</td>
                    <td>3.0</td>
                    <td>B</td>
                  </tr>
                  <tr>
                    <td>Minor</td>
                    <td>7.75</td>
                    <td>3.0</td>
                    <td>B</td>
                  </tr>
                  <tr>
                    <td>Overall</td>
                    <td>7.48</td>
                    <td>3.0</td>
                    <td>B</td>
                  </tr>
                </tbody>
              </table>Conversion from Carleton U 12.00 point to 4.0 point system: <a href="https://gradecalc.info/ca/on/carleton/gradeconv.pl"> https://gradecalc.info/ca/on/carleton/gradeconv.pl </a></div></div>
            </div>
              <div class="resume-date text-md-right">
            <span class="text-primary">September 2015 - June 2019</span>
          </div>
        </div>
        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="resume-content">
            <h3 class="mb-0">BS: Integrated Science and Technology</h3>
            <div class="subheading mb-3 headingChange"><a href="#sci" data-toggle="collapse" style="text-decoration:none;">Carleton University</a></div>
            <div id="sci" class="collapse">
            <div class="dont-print"> <table class="table dont-print">
                <thead>
                  <tr>
                    <th scope="col">Section</th>
                    <th scope="col">12.00 Points</th>
                    <th scope="col">4.0 Points</th>
                    <th scope="col">Alpha</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Major</td>
                    <td>6.11</td>
                    <td>2.3</td>
                    <td>C+</td>
                  </tr>
                  <tr>
                    <td>Concentration</td>
                    <td>8.60</td>
                    <td>3.3</td>
                    <td>B+</td>
                  </tr>
                  <tr>
                    <td>Overall</td>
                    <td>6.54</td>
                    <td>2.7</td>
                    <td>B-</td>
                  </tr>
                </tbody>
              </table>Conversion from Carleton U 12.00 point to 4.0 point system: <a href="https://gradecalc.info/ca/on/carleton/gradeconv.pl"> https://gradecalc.info/ca/on/carleton/gradeconv.pl </a></div> </div>
            </div>
              <div class="resume-date text-md-right">
            <span class="text-primary">September 2009 - June 2014</span>
          </div>
        </div>
      </div>
    </section>

  </div>

  <!-- Bootstrap core JavaScript -->
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Plugin JavaScript -->
  <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

  <!-- Custom scripts for this template -->
  <script src="js/resume.min.js"></script>

  <script>
		$(document).ready(function(){
  		$('[data-toggle="tooltip"]').tooltip();
		});
  </script>

</body></html>
