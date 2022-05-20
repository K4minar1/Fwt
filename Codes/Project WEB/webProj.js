window.onscroll = function() {fade()};
function fade()
{
    if(document.documentElement.scrollTop > 250)
    {
        document.getElementById("art1").style.backgroundColor="aliceblue";
        document.getElementById("art1").style.borderColor="white"
        document.getElementById("art1").style.transitionDuration="500ms";  
    }
    else
    {
        document.getElementById("art1").style.backgroundColor="transparent";
        document.getElementById("art1").style.borderColor="transparent";
        document.getElementById("art1").style.transitionDuration="500ms";
    }
}

function SMOpen()
{
    document.getElementById("sideMenu").style.display="flex";
    document.getElementById("sideMenu").style.position="sticky";
    document.getElementById("sideMenu").style.position="-webkit-sticky;"
    document.getElementById("sideMenu").style.flexDirection="column";
    document.getElementById("sideMenu").style.paddingLeft="20px";
    document.getElementById("sideMenu").style.paddingTop="10px"
    document.getElementById("navBar").style.display="none";
    document.getElementById("sideMenu").style.transitionDuration="500ms";
    document.getElementById("navBar").style.transitionDuration="500ms";
    document.getElementById("stickyMenu").style.marginTop="70px";
}
function SMClose()
{
    document.getElementById("sideMenu").style.display="none";
    document.getElementById("navBar").style.display="flex";
    document.getElementById("navBar").style.transitionDuration="500ms";
}
