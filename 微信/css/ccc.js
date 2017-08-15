window.onload=function ()
{
	var bo=document.getElementById("bo");
    var tanchu4=document.getElementById("tanchu4");
    var taolun4=document.getElementById("taolun4");
	tanchu4.onclick=function (e)
	{
		var pp=window.event||e;
		pp.stopPropagation();
		taolun4.style.display="inline-block";
	}
	bo.onclick=function (e)
	{
		var aa=window.event||e;
		aa.stopPropagation();
		taolun4.style.display="none";
	}
}