<link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css" >

<style>

.sidebar {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(9, 31, 68);
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  font-family:'Poppins', sans-serif;}

.sidebar a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #ffffff;
  display: block;
  transition: 0.3s;
}

.sidebar a:before{
  position: absolute;
  content: " "; 
  height: 33%;
  width:0;
  bottom: 66%;
  left: 0;
  background-color: white; 
}
.sidebar a:hover { 
  color: #f1f1f1;
  display:block;

}


.sidebar .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

.openbtn {
  font-size: 20px;
  cursor: pointer;
  background-color: #111;
  color: white;
  padding: 10px 15px;
  border: none;
}

.openbtn:hover {
  background-color: #444;
}

#main {
  transition: margin-left .5s;
  padding: 16px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidebar {padding-top: 15px;}
  .sidebar a {font-size: 18px;}
}
</style>

<body>

<div id="mySidebar" class="sidebar">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
  <a href="/create">Add</a>
  <a href="/delete">Remove</a>
  <a href="/update">Update</a>
  <a href="/">View</a>

</div>

<div id="main">
  <button class="openbtn" onclick="openNav()">☰</button>
  Todo  
</div>

<script>
function openNav() {
  document.getElementById("mySidebar").style.width = "200px";
  document.getElementById("main").style.marginLeft = "200px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
</script>
   
</body>

