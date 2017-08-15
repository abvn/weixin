window.onload=function ()
{
	var bo=document.getElementById("bo");
    var tanchu5=document.getElementById("tanchu5");
    var taolun5=document.getElementById("taolun5");
	tanchu5.onclick=function (e)
	{
		var pp=window.event||e;
		pp.stopPropagation();
		taolun5.style.display="inline-block";
	}
	bo.onclick=function (e)
	{
		var aa=window.event||e;
		aa.stopPropagation();
		taolun5.style.display="none";
	}
}