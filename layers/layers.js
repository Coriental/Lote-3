var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PostacionL3_1 = new ol.format.GeoJSON();
var features_PostacionL3_1 = format_PostacionL3_1.readFeatures(json_PostacionL3_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PostacionL3_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacionL3_1.addFeatures(features_PostacionL3_1);
var lyr_PostacionL3_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacionL3_1, 
                style: style_PostacionL3_1,
                popuplayertitle: "Postacion L3",
                interactive: true,
                title: '<img src="styles/legend/PostacionL3_1.png" /> Postacion L3'
            });
var format_postacinALT3_2 = new ol.format.GeoJSON();
var features_postacinALT3_2 = format_postacinALT3_2.readFeatures(json_postacinALT3_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_postacinALT3_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_postacinALT3_2.addFeatures(features_postacinALT3_2);
var lyr_postacinALT3_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_postacinALT3_2, 
                style: style_postacinALT3_2,
                popuplayertitle: "postación ALT3",
                interactive: true,
                title: '<img src="styles/legend/postacinALT3_2.png" /> postación ALT3'
            });
var format_postacinITG20609_3 = new ol.format.GeoJSON();
var features_postacinITG20609_3 = format_postacinITG20609_3.readFeatures(json_postacinITG20609_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_postacinITG20609_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_postacinITG20609_3.addFeatures(features_postacinITG20609_3);
var lyr_postacinITG20609_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_postacinITG20609_3, 
                style: style_postacinITG20609_3,
                popuplayertitle: "postación ITG2 06-09",
                interactive: true,
                title: '<img src="styles/legend/postacinITG20609_3.png" /> postación ITG2 06-09'
            });
var format_ITG11_4 = new ol.format.GeoJSON();
var features_ITG11_4 = format_ITG11_4.readFeatures(json_ITG11_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ITG11_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ITG11_4.addFeatures(features_ITG11_4);
var lyr_ITG11_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ITG11_4, 
                style: style_ITG11_4,
                popuplayertitle: "ITG11",
                interactive: true,
                title: '<img src="styles/legend/ITG11_4.png" /> ITG11'
            });
var format_GHN1_5 = new ol.format.GeoJSON();
var features_GHN1_5 = format_GHN1_5.readFeatures(json_GHN1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GHN1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GHN1_5.addFeatures(features_GHN1_5);
var lyr_GHN1_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GHN1_5, 
                style: style_GHN1_5,
                popuplayertitle: "GHN1",
                interactive: true,
                title: '<img src="styles/legend/GHN1_5.png" /> GHN1'
            });
var format_PDL3_6 = new ol.format.GeoJSON();
var features_PDL3_6 = format_PDL3_6.readFeatures(json_PDL3_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PDL3_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PDL3_6.addFeatures(features_PDL3_6);
var lyr_PDL3_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PDL3_6, 
                style: style_PDL3_6,
                popuplayertitle: "PD L3",
                interactive: true,
                title: '<img src="styles/legend/PDL3_6.png" /> PD L3'
            });
var format_MT3x185L3_7 = new ol.format.GeoJSON();
var features_MT3x185L3_7 = format_MT3x185L3_7.readFeatures(json_MT3x185L3_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MT3x185L3_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x185L3_7.addFeatures(features_MT3x185L3_7);
var lyr_MT3x185L3_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x185L3_7, 
                style: style_MT3x185L3_7,
                popuplayertitle: "MT 3x185 L3",
                interactive: true,
                title: '<img src="styles/legend/MT3x185L3_7.png" /> MT 3x185 L3'
            });
var format_MT3x70L3_8 = new ol.format.GeoJSON();
var features_MT3x70L3_8 = format_MT3x70L3_8.readFeatures(json_MT3x70L3_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MT3x70L3_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x70L3_8.addFeatures(features_MT3x70L3_8);
var lyr_MT3x70L3_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x70L3_8, 
                style: style_MT3x70L3_8,
                popuplayertitle: "MT 3x70 L3",
                interactive: true,
                title: '<img src="styles/legend/MT3x70L3_8.png" /> MT 3x70 L3'
            });
var format_MT3x35_L3_9 = new ol.format.GeoJSON();
var features_MT3x35_L3_9 = format_MT3x35_L3_9.readFeatures(json_MT3x35_L3_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MT3x35_L3_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x35_L3_9.addFeatures(features_MT3x35_L3_9);
var lyr_MT3x35_L3_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x35_L3_9, 
                style: style_MT3x35_L3_9,
                popuplayertitle: "MT 3x35_L3",
                interactive: true,
                title: '<img src="styles/legend/MT3x35_L3_9.png" /> MT 3x35_L3'
            });
var format_BT3x701x501x25L3_10 = new ol.format.GeoJSON();
var features_BT3x701x501x25L3_10 = format_BT3x701x501x25L3_10.readFeatures(json_BT3x701x501x25L3_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BT3x701x501x25L3_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BT3x701x501x25L3_10.addFeatures(features_BT3x701x501x25L3_10);
var lyr_BT3x701x501x25L3_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BT3x701x501x25L3_10, 
                style: style_BT3x701x501x25L3_10,
                popuplayertitle: "BT 3x70+1x50+1x25 L3",
                interactive: true,
                title: '<img src="styles/legend/BT3x701x501x25L3_10.png" /> BT 3x70+1x50+1x25 L3'
            });
var group_LOTE1 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 1"});
var group_LOTE2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 2"});
var group_LOTE3 = new ol.layer.Group({
                                layers: [lyr_PostacionL3_1,lyr_postacinALT3_2,lyr_postacinITG20609_3,lyr_ITG11_4,lyr_GHN1_5,],
                                fold: "open",
                                title: "LOTE 3"});
var group_LOTE4 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 4"});
var group_LOTE5 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 5"});
var group_LOTE6 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 6"});
var group_Lote1 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote 1"});
var group_Lote2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote 2"});
var group_Lote3 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote 3"});
var group_Lote4 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote 4"});
var group_Lote5 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote 5"});
var group_Lote6 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote 6"});
var group_OpenStreetMap = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "OpenStreetMap"});

lyr_OpenStreetMap_0.setVisible(true);lyr_PostacionL3_1.setVisible(true);lyr_postacinALT3_2.setVisible(true);lyr_postacinITG20609_3.setVisible(true);lyr_ITG11_4.setVisible(true);lyr_GHN1_5.setVisible(true);lyr_PDL3_6.setVisible(true);lyr_MT3x185L3_7.setVisible(true);lyr_MT3x70L3_8.setVisible(true);lyr_MT3x35_L3_9.setVisible(true);lyr_BT3x701x501x25L3_10.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_LOTE3,lyr_PDL3_6,lyr_MT3x185L3_7,lyr_MT3x70L3_8,lyr_MT3x35_L3_9,lyr_BT3x701x501x25L3_10];
lyr_PostacionL3_1.set('fieldAliases', {});
lyr_postacinALT3_2.set('fieldAliases', {'LOTE': 'LOTE', 'CONTRATIST': 'CONTRATIST', 'ALIMENTADO': 'ALIMENTADO', 'N° DE SOS': 'N° DE SOS', 'TIPO DE PO': 'TIPO DE PO', 'N° DE FÁ': 'N° DE FÁ', 'COORD. X': 'COORD. X', 'COORD. Y': 'COORD. Y', });
lyr_postacinITG20609_3.set('fieldAliases', {'FECHA': 'FECHA', 'LOTE': 'LOTE', 'CONTRATIST': 'CONTRATIST', 'ALIMENTADO': 'ALIMENTADO', 'N° DE SOS': 'N° DE SOS', 'TIPO DE PO': 'TIPO DE PO', 'N° DE FÁ': 'N° DE FÁ', 'COORD. X': 'COORD. X', 'COORD. Y': 'COORD. Y', });
lyr_ITG11_4.set('fieldAliases', {'LOTE': 'LOTE', 'CONTRATIST': 'CONTRATIST', 'ALIMENTADO': 'ALIMENTADO', 'N° DE SOS': 'N° DE SOS', 'TIPO DE PO': 'TIPO DE PO', 'N° DE FÁ': 'N° DE FÁ', 'COORDENADA': 'COORDENADA', 'COORDENA_1': 'COORDENA_1', });
lyr_GHN1_5.set('fieldAliases', {'LOTE': 'LOTE', 'ALIMENT.': 'ALIMENT.', 'Sostén': 'Sostén', 'TIPO/POSTE': 'TIPO/POSTE', 'Nro de fá': 'Nro de fá', 'X': 'X', 'y': 'y', });
lyr_PDL3_6.set('fieldAliases', {'ALIMENTADOR': 'ALIMENTADOR', 'TIPO COLUMNA': 'TIPO COLUMNA', 'N° DE SOSTEN': 'N° DE SOSTEN', 'N° DE FÁBRICA': 'N° DE FÁBRICA', 'NRO ANDE': 'NRO ANDE', 'COORDENADA X': 'COORDENADA X', 'COORDENADA Y': 'COORDENADA Y', });
lyr_MT3x185L3_7.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', });
lyr_MT3x70L3_8.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', });
lyr_MT3x35_L3_9.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO/FIN': 'INICIO/FIN', 'LONGITUD': 'LONGITUD', });
lyr_BT3x701x501x25L3_10.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', });
lyr_PostacionL3_1.set('fieldImages', {});
lyr_postacinALT3_2.set('fieldImages', {'LOTE': 'TextEdit', 'CONTRATIST': 'TextEdit', 'ALIMENTADO': 'TextEdit', 'N° DE SOS': 'TextEdit', 'TIPO DE PO': 'TextEdit', 'N° DE FÁ': 'Range', 'COORD. X': 'Range', 'COORD. Y': 'Range', });
lyr_postacinITG20609_3.set('fieldImages', {'FECHA': 'TextEdit', 'LOTE': 'TextEdit', 'CONTRATIST': 'TextEdit', 'ALIMENTADO': 'TextEdit', 'N° DE SOS': 'TextEdit', 'TIPO DE PO': 'TextEdit', 'N° DE FÁ': 'TextEdit', 'COORD. X': 'TextEdit', 'COORD. Y': 'TextEdit', });
lyr_ITG11_4.set('fieldImages', {'LOTE': 'TextEdit', 'CONTRATIST': 'TextEdit', 'ALIMENTADO': 'TextEdit', 'N° DE SOS': 'TextEdit', 'TIPO DE PO': 'TextEdit', 'N° DE FÁ': 'TextEdit', 'COORDENADA': 'TextEdit', 'COORDENA_1': 'TextEdit', });
lyr_GHN1_5.set('fieldImages', {'LOTE': 'TextEdit', 'ALIMENT.': 'TextEdit', 'Sostén': 'TextEdit', 'TIPO/POSTE': 'TextEdit', 'Nro de fá': 'Range', 'X': 'Range', 'y': 'Range', });
lyr_PDL3_6.set('fieldImages', {'ALIMENTADOR': 'TextEdit', 'TIPO COLUMNA': 'TextEdit', 'N° DE SOSTEN': 'TextEdit', 'N° DE FÁBRICA': 'Range', 'NRO ANDE': 'Range', 'COORDENADA X': 'TextEdit', 'COORDENADA Y': 'TextEdit', });
lyr_MT3x185L3_7.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', });
lyr_MT3x70L3_8.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', });
lyr_MT3x35_L3_9.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO/FIN': 'TextEdit', 'LONGITUD': 'TextEdit', });
lyr_BT3x701x501x25L3_10.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', });
lyr_PostacionL3_1.set('fieldLabels', {});
lyr_postacinALT3_2.set('fieldLabels', {'LOTE': 'no label', 'CONTRATIST': 'no label', 'ALIMENTADO': 'no label', 'N° DE SOS': 'no label', 'TIPO DE PO': 'no label', 'N° DE FÁ': 'no label', 'COORD. X': 'no label', 'COORD. Y': 'no label', });
lyr_postacinITG20609_3.set('fieldLabels', {'FECHA': 'no label', 'LOTE': 'no label', 'CONTRATIST': 'no label', 'ALIMENTADO': 'no label', 'N° DE SOS': 'no label', 'TIPO DE PO': 'no label', 'N° DE FÁ': 'no label', 'COORD. X': 'no label', 'COORD. Y': 'no label', });
lyr_ITG11_4.set('fieldLabels', {'LOTE': 'no label', 'CONTRATIST': 'no label', 'ALIMENTADO': 'no label', 'N° DE SOS': 'no label', 'TIPO DE PO': 'no label', 'N° DE FÁ': 'no label', 'COORDENADA': 'no label', 'COORDENA_1': 'no label', });
lyr_GHN1_5.set('fieldLabels', {'LOTE': 'no label', 'ALIMENT.': 'no label', 'Sostén': 'no label', 'TIPO/POSTE': 'no label', 'Nro de fá': 'no label', 'X': 'no label', 'y': 'no label', });
lyr_PDL3_6.set('fieldLabels', {'ALIMENTADOR': 'no label', 'TIPO COLUMNA': 'no label', 'N° DE SOSTEN': 'no label', 'N° DE FÁBRICA': 'no label', 'NRO ANDE': 'no label', 'COORDENADA X': 'no label', 'COORDENADA Y': 'no label', });
lyr_MT3x185L3_7.set('fieldLabels', {'FECHA': 'no label', 'INICIO-FIN': 'no label', 'LONGITUD': 'no label', });
lyr_MT3x70L3_8.set('fieldLabels', {'FECHA': 'no label', 'INICIO-FIN': 'no label', 'LONGITUD': 'no label', });
lyr_MT3x35_L3_9.set('fieldLabels', {'FECHA': 'no label', 'INICIO/FIN': 'no label', 'LONGITUD': 'no label', });
lyr_BT3x701x501x25L3_10.set('fieldLabels', {'FECHA': 'no label', 'INICIO-FIN': 'no label', 'LONGITUD': 'no label', });
lyr_BT3x701x501x25L3_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});