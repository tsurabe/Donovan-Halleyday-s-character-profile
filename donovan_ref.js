class Header extends HTMLElement {
    constructor() {
    super();
    }

    connectedCallback() {
    this.innerHTML = `
        <style>

.sidenav {
    height: 100%; /* Full-height: remove this if you want "auto" height */
    width: 230px; /* Set the width of the sidebar */
    position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    background-color:rgb(35, 68, 68);
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 20px;
    border-bottom: none;
    border-right: 1px black solid;
}

.sidenav a {
    padding: 7px 0px 7px 20px;
    margin: 0px 40px 5px 30px;
    text-decoration: none;
    display: block;
    border: 1px black solid;
    background-color: white;
}

.sidenav p {
    padding: 0px 20px;
    text-decoration: none;
    }

.sidenav h2 {
    margin-top: 0px;
    padding: 0px 40px 0px 40px;
    text-decoration: none;
    text-align: justify;
    border-bottom: 0px;
}


@media screen and (max-width: 1350px) {
.sidenav {
    height: 40px;
    width: 100%; /* Set the width of the sidebar */
    position: static;
    z-index: 1; /* Stay on top */
    overflow-x: scroll;
    scrollbar-width: none;
    top: 0; /* Stay at the top */
    left: 0;
    background-color: #234444;
    white-space: nowrap;
    padding-top: 10px;
    align-content: center;
    border-bottom: 1px black solid;
    border-right: none;
    }

.sidenav a {
    padding: 3px 10px;
    margin: 0px;
    text-decoration: none;
    display: inline;
    border: 0px;
    background-color: rgb(35, 68, 68);
}

.sidenav .imagehere {
    display: none;
            }

.sidenav br {
    display: none;
            }

.sidenav p {
    display: none;
            }

.sidenav h2 {
    display: none;
            }

.sidenav hr {
    display: none;
            }

} 
        </style>

<!-- Side navigation -->
<div class="sidenav">
    <div class="imagehere" style="background-image: url('../characters/Donovan/pics/unusual2.png')"></div><br>
        <h2>Hello meow</h2>
        <a href="../html/index.html">Home</a>
        <a href="../html/about.html">About</a>
        <a href="../html/faq.html">F.A.Q</a>
        <a href="../html/comms.html">Commission info</a>
        <a href="../html/characters.html">Characters</a>
        <a href="../html/archive.html">Archive</a>
        <a href="../html/resources.html">Resources</a>
        <a href="../html/links.html">Links</a>

    <center><img style="padding-top:15px;" src="../gif/green_illusion.gif" width: 35%></center>
    <center><img style="padding-top: 20px" src="../img/IMG-7361.png" width="35%"></center>
</div>


    `;
    }
}

customElements.define('header-component', Header);