window.onload=function ()
{
	var bo=document.getElementById("bo");
    var tanchu6=document.getElementById("tanchu6");
    var taolun6=document.getElementById("taolun6");
	tanchu6.onclick=function (e)
	{
		var pp=window.event||e;
		pp.stopPropagation();
		taolun6.style.display="inline-block";
	}
	bo.onclick=function (e)
	{
		var aa=window.event||e;
		aa.stopPropagation();
		taolun6.style.display="none";
	}
}