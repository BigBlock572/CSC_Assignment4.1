var mononoke = 5;
var change = 150;

function start()
{
    document.getElementById("TheBegining").disabled = true;
    document.getElementById("TheEnd").disabled = false;
    var image = document.getElementById("Princess");

    mononoke = setInterval(function()
    {
        factor = 15;
        if(change >1120)
        {
            factor = -1120;
        }
        image.style.left = change + "px";
        change +=factor;
    },150);
}

function stop()
{
    document.getElementById("TheEnd").disabled = true;
    document.getElementById("TheBegining").disabled = false;

    clearInterval(mononoke);
}