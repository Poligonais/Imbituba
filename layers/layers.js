var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_AnexoIIIreadeDespejodeRestosdeDragagem_1 = new ol.format.GeoJSON();
var features_AnexoIIIreadeDespejodeRestosdeDragagem_1 = format_AnexoIIIreadeDespejodeRestosdeDragagem_1.readFeatures(json_AnexoIIIreadeDespejodeRestosdeDragagem_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIIIreadeDespejodeRestosdeDragagem_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIIIreadeDespejodeRestosdeDragagem_1.addFeatures(features_AnexoIIIreadeDespejodeRestosdeDragagem_1);
var lyr_AnexoIIIreadeDespejodeRestosdeDragagem_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIIIreadeDespejodeRestosdeDragagem_1, 
                style: style_AnexoIIIreadeDespejodeRestosdeDragagem_1,
                popuplayertitle: "Anexo III - Área de Despejo de Restos de Dragagem",
                interactive: true,
                title: '<img src="styles/legend/AnexoIIIreadeDespejodeRestosdeDragagem_1.png" /> Anexo III - Área de Despejo de Restos de Dragagem'
            });
var format_AnexoIIreadeQuarentena_2 = new ol.format.GeoJSON();
var features_AnexoIIreadeQuarentena_2 = format_AnexoIIreadeQuarentena_2.readFeatures(json_AnexoIIreadeQuarentena_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIIreadeQuarentena_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIIreadeQuarentena_2.addFeatures(features_AnexoIIreadeQuarentena_2);
var lyr_AnexoIIreadeQuarentena_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIIreadeQuarentena_2, 
                style: style_AnexoIIreadeQuarentena_2,
                popuplayertitle: "Anexo II - Área de Quarentena",
                interactive: true,
                title: '<img src="styles/legend/AnexoIIreadeQuarentena_2.png" /> Anexo II - Área de Quarentena'
            });
var format_AnexoIPolgonoPrincipal_3 = new ol.format.GeoJSON();
var features_AnexoIPolgonoPrincipal_3 = format_AnexoIPolgonoPrincipal_3.readFeatures(json_AnexoIPolgonoPrincipal_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIPolgonoPrincipal_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIPolgonoPrincipal_3.addFeatures(features_AnexoIPolgonoPrincipal_3);
var lyr_AnexoIPolgonoPrincipal_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIPolgonoPrincipal_3, 
                style: style_AnexoIPolgonoPrincipal_3,
                popuplayertitle: "Anexo I - Polígono Principal",
                interactive: true,
                title: '<img src="styles/legend/AnexoIPolgonoPrincipal_3.png" /> Anexo I - Polígono Principal'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_AnexoIIIreadeDespejodeRestosdeDragagem_1.setVisible(true);lyr_AnexoIIreadeQuarentena_2.setVisible(true);lyr_AnexoIPolgonoPrincipal_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_AnexoIIIreadeDespejodeRestosdeDragagem_1,lyr_AnexoIIreadeQuarentena_2,lyr_AnexoIPolgonoPrincipal_3];
lyr_AnexoIIIreadeDespejodeRestosdeDragagem_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIIreadeQuarentena_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIPolgonoPrincipal_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIIIreadeDespejodeRestosdeDragagem_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIIreadeQuarentena_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIPolgonoPrincipal_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIIIreadeDespejodeRestosdeDragagem_1.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIIreadeQuarentena_2.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIPolgonoPrincipal_3.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIPolgonoPrincipal_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});