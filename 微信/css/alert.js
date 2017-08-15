window.onload=function (e)
{
	var tanchu=document.getElementById("tanchu");
	var taolun=document.getElementById("taolun");
	var bo=document.getElementById("bo");
	bo.onclick=function (e)
	{
		var aa=window.event||e;
		aa.stopPropagation();
		taolun.style.display="none";
		taolun1.style.display="none";
		taolun2.style.display="none";
	}
	tanchu.onclick=function (e)
	{
		var ee=window.event||e;
		ee.stopPropagation();
		taolun.style.display="inline-block";
	}
	var tanchu1=document.getElementById("tanchu1");
	var taolun1=document.getElementById("taolun1");
	tanchu1.onclick=function (e)
	{
		var cc=window.event||e;
		cc.stopPropagation();
		taolun1.style.display="inline-block";
	}
	var tanchu2=document.getElementById("tanchu2");
	var taolun2=document.getElementById("taolun2");
	tanchu2.onclick=function (e)
	{
		var ff=window.event||e;
		ff.stopPropagation();
		taolun2.style.display="inline-block";
	}
}
