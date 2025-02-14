var size = 0;
var placement = 'point';
function categories_PontosQuilombos_10(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'QUILOMBO DOS ALPES':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [5, 5],
                  scale: 15.2,
                  anchor: [2.5, 2.5],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/Símbolo ALPES-02_1.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'QUILOMBO DOS MACHADO':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [5, 5],
                  scale: 15.2,
                  anchor: [2.5, 2.5],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/icone MACHADO-01_1.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'QUILOMBO FAMÍLIA DE OURO':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [5, 5],
                  scale: 19.0,
                  anchor: [2.5, 2.5],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/Ícone FAMÍLIA DE OURO-01_1.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Mercado Público':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [5, 5],
                  scale: 15.2,
                  anchor: [2.5, 2.5],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/icone Mercado MOCAMBO-22.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(165,145,72,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_PontosQuilombos_10 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("Nome");
    var labelFont = "26.0px \'Berlin Sans FB\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "#f80000";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_PontosQuilombos_10(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
