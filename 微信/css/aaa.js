window.onload=function ()
{
	var bo=document.getElementById("bo");
    var tanchu3=document.getElementById("tanchu3");
    var taolun3=document.getElementById("taolun3");
	tanchu3.onclick=function (e)
	{
		var pp=window.event||e;
		pp.stopPropagation();
		taolun3.style.display="inline-block";
	}
	bo.onclick=function (e)
	{
		var aa=window.event||e;
		aa.stopPropagation();
		taolun3.style.display="none";
	}
}
