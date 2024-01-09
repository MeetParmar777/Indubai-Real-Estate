navbar = document.getElementById('navbar');
document.addEventListener('scroll', scroll)
function scroll()
{
    if(document.documentElement.scrollTop > 80)
    {
        navbar.classList.add('active');
    }
    else
    {
        navbar.classList.remove('active');
    }
}