var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Bairros_LC12112_16Bairros_LC12112_16shp_1 = new ol.format.GeoJSON();
var features_Bairros_LC12112_16Bairros_LC12112_16shp_1 = format_Bairros_LC12112_16Bairros_LC12112_16shp_1.readFeatures(json_Bairros_LC12112_16Bairros_LC12112_16shp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bairros_LC12112_16Bairros_LC12112_16shp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bairros_LC12112_16Bairros_LC12112_16shp_1.addFeatures(features_Bairros_LC12112_16Bairros_LC12112_16shp_1);
var lyr_Bairros_LC12112_16Bairros_LC12112_16shp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bairros_LC12112_16Bairros_LC12112_16shp_1, 
                style: style_Bairros_LC12112_16Bairros_LC12112_16shp_1,
                popuplayertitle: 'Bairros_LC12112_16 — Bairros_LC12112_16.shp',
                interactive: true,
                title: '<img src="styles/legend/Bairros_LC12112_16Bairros_LC12112_16shp_1.png" /> Bairros_LC12112_16 — Bairros_LC12112_16.shp'
            });
var format_LinhaAlpesMachado_2 = new ol.format.GeoJSON();
var features_LinhaAlpesMachado_2 = format_LinhaAlpesMachado_2.readFeatures(json_LinhaAlpesMachado_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LinhaAlpesMachado_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LinhaAlpesMachado_2.addFeatures(features_LinhaAlpesMachado_2);
var lyr_LinhaAlpesMachado_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LinhaAlpesMachado_2, 
                style: style_LinhaAlpesMachado_2,
                popuplayertitle: 'Linha Alpes Machado',
                interactive: true,
                title: '<img src="styles/legend/LinhaAlpesMachado_2.png" /> Linha Alpes Machado'
            });
var format_LinhaAlpesOuro_3 = new ol.format.GeoJSON();
var features_LinhaAlpesOuro_3 = format_LinhaAlpesOuro_3.readFeatures(json_LinhaAlpesOuro_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LinhaAlpesOuro_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LinhaAlpesOuro_3.addFeatures(features_LinhaAlpesOuro_3);
var lyr_LinhaAlpesOuro_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LinhaAlpesOuro_3, 
                style: style_LinhaAlpesOuro_3,
                popuplayertitle: 'Linha Alpes Ouro',
                interactive: true,
                title: '<img src="styles/legend/LinhaAlpesOuro_3.png" /> Linha Alpes Ouro'
            });
var format_LinhaMachadoOuro_4 = new ol.format.GeoJSON();
var features_LinhaMachadoOuro_4 = format_LinhaMachadoOuro_4.readFeatures(json_LinhaMachadoOuro_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LinhaMachadoOuro_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LinhaMachadoOuro_4.addFeatures(features_LinhaMachadoOuro_4);
var lyr_LinhaMachadoOuro_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LinhaMachadoOuro_4, 
                style: style_LinhaMachadoOuro_4,
                popuplayertitle: 'Linha Machado Ouro',
                interactive: true,
                title: '<img src="styles/legend/LinhaMachadoOuro_4.png" /> Linha Machado Ouro'
            });
var format_LinhaMachadoMercado_5 = new ol.format.GeoJSON();
var features_LinhaMachadoMercado_5 = format_LinhaMachadoMercado_5.readFeatures(json_LinhaMachadoMercado_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LinhaMachadoMercado_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LinhaMachadoMercado_5.addFeatures(features_LinhaMachadoMercado_5);
var lyr_LinhaMachadoMercado_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LinhaMachadoMercado_5, 
                style: style_LinhaMachadoMercado_5,
                popuplayertitle: 'Linha Machado Mercado',
                interactive: true,
                title: '<img src="styles/legend/LinhaMachadoMercado_5.png" /> Linha Machado Mercado'
            });
var format_LinhaOuroMercado_6 = new ol.format.GeoJSON();
var features_LinhaOuroMercado_6 = format_LinhaOuroMercado_6.readFeatures(json_LinhaOuroMercado_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LinhaOuroMercado_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LinhaOuroMercado_6.addFeatures(features_LinhaOuroMercado_6);
var lyr_LinhaOuroMercado_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LinhaOuroMercado_6, 
                style: style_LinhaOuroMercado_6,
                popuplayertitle: 'Linha Ouro Mercado',
                interactive: true,
                title: '<img src="styles/legend/LinhaOuroMercado_6.png" /> Linha Ouro Mercado'
            });
var format_LinhaAlpesMercado_7 = new ol.format.GeoJSON();
var features_LinhaAlpesMercado_7 = format_LinhaAlpesMercado_7.readFeatures(json_LinhaAlpesMercado_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LinhaAlpesMercado_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LinhaAlpesMercado_7.addFeatures(features_LinhaAlpesMercado_7);
var lyr_LinhaAlpesMercado_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LinhaAlpesMercado_7, 
                style: style_LinhaAlpesMercado_7,
                popuplayertitle: 'Linha Alpes Mercado',
                interactive: true,
                title: '<img src="styles/legend/LinhaAlpesMercado_7.png" /> Linha Alpes Mercado'
            });
var format_ParadaAlpesMachado_8 = new ol.format.GeoJSON();
var features_ParadaAlpesMachado_8 = format_ParadaAlpesMachado_8.readFeatures(json_ParadaAlpesMachado_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParadaAlpesMachado_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParadaAlpesMachado_8.addFeatures(features_ParadaAlpesMachado_8);
var lyr_ParadaAlpesMachado_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParadaAlpesMachado_8, 
                style: style_ParadaAlpesMachado_8,
                popuplayertitle: 'Parada Alpes Machado',
                interactive: true,
                title: '<img src="styles/legend/ParadaAlpesMachado_8.png" /> Parada Alpes Machado'
            });
var format_PontosQuilomboscopiar_9 = new ol.format.GeoJSON();
var features_PontosQuilomboscopiar_9 = format_PontosQuilomboscopiar_9.readFeatures(json_PontosQuilomboscopiar_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PontosQuilomboscopiar_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PontosQuilomboscopiar_9.addFeatures(features_PontosQuilomboscopiar_9);
var lyr_PontosQuilomboscopiar_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PontosQuilomboscopiar_9, 
                style: style_PontosQuilomboscopiar_9,
                popuplayertitle: 'Pontos Quilombos  copiar',
                interactive: true,
    title: 'Pontos Quilombos  copiar<br />\
    <img src="styles/legend/PontosQuilomboscopiar_9_0.png" /> <br />\
    <img src="styles/legend/PontosQuilomboscopiar_9_1.png" /> Quilombo dos Alpes<br />\
    <img src="styles/legend/PontosQuilomboscopiar_9_2.png" /> Quilombo dos Machado<br />\
    <img src="styles/legend/PontosQuilomboscopiar_9_3.png" /> Quilombo Família de Ouro<br />' });
var format_PontosQuilombos_10 = new ol.format.GeoJSON();
var features_PontosQuilombos_10 = format_PontosQuilombos_10.readFeatures(json_PontosQuilombos_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PontosQuilombos_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PontosQuilombos_10.addFeatures(features_PontosQuilombos_10);
var lyr_PontosQuilombos_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PontosQuilombos_10, 
                style: style_PontosQuilombos_10,
                popuplayertitle: 'Pontos Quilombos',
                interactive: true,
    title: 'Pontos Quilombos<br />\
    <img src="styles/legend/PontosQuilombos_10_0.png" /> QUILOMBO DOS ALPES<br />\
    <img src="styles/legend/PontosQuilombos_10_1.png" /> QUILOMBO DOS MACHADO<br />\
    <img src="styles/legend/PontosQuilombos_10_2.png" /> QUILOMBO FAMÍLIA DE OURO<br />\
    <img src="styles/legend/PontosQuilombos_10_3.png" /> Mercado Público<br />\
    <img src="styles/legend/PontosQuilombos_10_4.png" /> <br />' });

lyr_GoogleRoad_0.setVisible(true);lyr_Bairros_LC12112_16Bairros_LC12112_16shp_1.setVisible(true);lyr_LinhaAlpesMachado_2.setVisible(true);lyr_LinhaAlpesOuro_3.setVisible(true);lyr_LinhaMachadoOuro_4.setVisible(true);lyr_LinhaMachadoMercado_5.setVisible(true);lyr_LinhaOuroMercado_6.setVisible(true);lyr_LinhaAlpesMercado_7.setVisible(true);lyr_ParadaAlpesMachado_8.setVisible(true);lyr_PontosQuilomboscopiar_9.setVisible(true);lyr_PontosQuilombos_10.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_Bairros_LC12112_16Bairros_LC12112_16shp_1,lyr_LinhaAlpesMachado_2,lyr_LinhaAlpesOuro_3,lyr_LinhaMachadoOuro_4,lyr_LinhaMachadoMercado_5,lyr_LinhaOuroMercado_6,lyr_LinhaAlpesMercado_7,lyr_ParadaAlpesMachado_8,lyr_PontosQuilomboscopiar_9,lyr_PontosQuilombos_10];
lyr_Bairros_LC12112_16Bairros_LC12112_16shp_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CODIGO': 'CODIGO', 'NOME': 'NOME', 'EDITOR': 'EDITOR', 'DATA_EDICA': 'DATA_EDICA', 'GEOM_AREA': 'GEOM_AREA', 'GEOM_LEN': 'GEOM_LEN', });
lyr_LinhaAlpesMachado_2.set('fieldAliases', {'fid': 'fid', 'Linha': 'Linha', 'Número': 'Número', 'Origem': 'Origem', 'Destino': 'Destino', });
lyr_LinhaAlpesOuro_3.set('fieldAliases', {'fid': 'fid', 'Linha': 'Linha', 'Número': 'Número', 'Origem': 'Origem', 'Destino': 'Destino', });
lyr_LinhaMachadoOuro_4.set('fieldAliases', {'id': 'id', 'Linha': 'Linha', 'Número': 'Número', 'Origem': 'Origem', 'Destino': 'Destino', });
lyr_LinhaMachadoMercado_5.set('fieldAliases', {'id': 'id', 'Linha': 'Linha', 'Número': 'Número', 'Origem': 'Origem', 'Destino': 'Destino', });
lyr_LinhaOuroMercado_6.set('fieldAliases', {'id': 'id', 'Linha': 'Linha', 'Número': 'Número', 'Origem': 'Origem', 'Destino': 'Destino', });
lyr_LinhaAlpesMercado_7.set('fieldAliases', {'id': 'id', 'Linha': 'Linha', 'Número': 'Número', 'Origem': 'Origem', 'Destino': 'Destino', });
lyr_ParadaAlpesMachado_8.set('fieldAliases', {'id': 'id', 'Nome': 'Nome', });
lyr_PontosQuilomboscopiar_9.set('fieldAliases', {'id': 'id', 'Nome': 'Nome', 'Bairro': 'Bairro', });
lyr_PontosQuilombos_10.set('fieldAliases', {'id': 'id', 'Nome': 'Nome', 'Bairro': 'Bairro', });
lyr_Bairros_LC12112_16Bairros_LC12112_16shp_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'CODIGO': 'TextEdit', 'NOME': 'TextEdit', 'EDITOR': 'TextEdit', 'DATA_EDICA': 'DateTime', 'GEOM_AREA': 'TextEdit', 'GEOM_LEN': 'TextEdit', });
lyr_LinhaAlpesMachado_2.set('fieldImages', {'fid': 'TextEdit', 'Linha': 'TextEdit', 'Número': 'TextEdit', 'Origem': 'TextEdit', 'Destino': 'TextEdit', });
lyr_LinhaAlpesOuro_3.set('fieldImages', {'fid': 'TextEdit', 'Linha': 'TextEdit', 'Número': 'TextEdit', 'Origem': 'TextEdit', 'Destino': 'TextEdit', });
lyr_LinhaMachadoOuro_4.set('fieldImages', {'id': 'TextEdit', 'Linha': 'TextEdit', 'Número': 'TextEdit', 'Origem': 'TextEdit', 'Destino': 'TextEdit', });
lyr_LinhaMachadoMercado_5.set('fieldImages', {'id': 'TextEdit', 'Linha': 'TextEdit', 'Número': 'TextEdit', 'Origem': 'TextEdit', 'Destino': 'TextEdit', });
lyr_LinhaOuroMercado_6.set('fieldImages', {'id': 'TextEdit', 'Linha': 'TextEdit', 'Número': 'TextEdit', 'Origem': 'TextEdit', 'Destino': 'TextEdit', });
lyr_LinhaAlpesMercado_7.set('fieldImages', {'id': 'TextEdit', 'Linha': 'TextEdit', 'Número': 'TextEdit', 'Origem': 'TextEdit', 'Destino': 'TextEdit', });
lyr_ParadaAlpesMachado_8.set('fieldImages', {'id': 'TextEdit', 'Nome': 'TextEdit', });
lyr_PontosQuilomboscopiar_9.set('fieldImages', {'id': 'TextEdit', 'Nome': 'TextEdit', 'Bairro': 'TextEdit', });
lyr_PontosQuilombos_10.set('fieldImages', {'id': 'TextEdit', 'Nome': 'TextEdit', 'Bairro': 'TextEdit', });
lyr_Bairros_LC12112_16Bairros_LC12112_16shp_1.set('fieldLabels', {'OBJECTID': 'no label', 'CODIGO': 'no label', 'NOME': 'no label', 'EDITOR': 'no label', 'DATA_EDICA': 'no label', 'GEOM_AREA': 'no label', 'GEOM_LEN': 'no label', });
lyr_LinhaAlpesMachado_2.set('fieldLabels', {'fid': 'no label', 'Linha': 'no label', 'Número': 'no label', 'Origem': 'no label', 'Destino': 'no label', });
lyr_LinhaAlpesOuro_3.set('fieldLabels', {'fid': 'no label', 'Linha': 'no label', 'Número': 'no label', 'Origem': 'no label', 'Destino': 'no label', });
lyr_LinhaMachadoOuro_4.set('fieldLabels', {'id': 'no label', 'Linha': 'no label', 'Número': 'no label', 'Origem': 'no label', 'Destino': 'no label', });
lyr_LinhaMachadoMercado_5.set('fieldLabels', {'id': 'no label', 'Linha': 'no label', 'Número': 'no label', 'Origem': 'no label', 'Destino': 'no label', });
lyr_LinhaOuroMercado_6.set('fieldLabels', {'id': 'no label', 'Linha': 'no label', 'Número': 'no label', 'Origem': 'no label', 'Destino': 'no label', });
lyr_LinhaAlpesMercado_7.set('fieldLabels', {'id': 'no label', 'Linha': 'no label', 'Número': 'no label', 'Origem': 'no label', 'Destino': 'no label', });
lyr_ParadaAlpesMachado_8.set('fieldLabels', {'id': 'no label', 'Nome': 'no label', });
lyr_PontosQuilomboscopiar_9.set('fieldLabels', {'id': 'no label', 'Nome': 'inline label - always visible', 'Bairro': 'inline label - always visible', });
lyr_PontosQuilombos_10.set('fieldLabels', {'id': 'no label', 'Nome': 'no label', 'Bairro': 'no label', });
lyr_PontosQuilombos_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});