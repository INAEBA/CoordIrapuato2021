var wms_layers = [];


        var lyr_GoogleEarth_0 = new ol.layer.Tile({
            'title': 'Google Earth',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CoordinacionIrapuato_3 = new ol.format.GeoJSON();
var features_CoordinacionIrapuato_3 = format_CoordinacionIrapuato_3.readFeatures(json_CoordinacionIrapuato_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionIrapuato_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionIrapuato_3.addFeatures(features_CoordinacionIrapuato_3);
var lyr_CoordinacionIrapuato_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionIrapuato_3, 
                style: style_CoordinacionIrapuato_3,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionIrapuato_3.png" /> Coordinacion Irapuato'
            });
var format_EduacionMediaSuperiorySuperior_4 = new ol.format.GeoJSON();
var features_EduacionMediaSuperiorySuperior_4 = format_EduacionMediaSuperiorySuperior_4.readFeatures(json_EduacionMediaSuperiorySuperior_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EduacionMediaSuperiorySuperior_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EduacionMediaSuperiorySuperior_4.addFeatures(features_EduacionMediaSuperiorySuperior_4);
var lyr_EduacionMediaSuperiorySuperior_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EduacionMediaSuperiorySuperior_4, 
                style: style_EduacionMediaSuperiorySuperior_4,
                interactive: true,
                title: '<img src="styles/legend/EduacionMediaSuperiorySuperior_4.png" /> Eduacion MediaSuperior y Superior'
            });
var format_MicroregionIR12_5 = new ol.format.GeoJSON();
var features_MicroregionIR12_5 = format_MicroregionIR12_5.readFeatures(json_MicroregionIR12_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionIR12_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionIR12_5.addFeatures(features_MicroregionIR12_5);
var lyr_MicroregionIR12_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionIR12_5, 
                style: style_MicroregionIR12_5,
                interactive: false,
    title: 'Microregion IR12<br />\
    <img src="styles/legend/MicroregionIR12_5_0.png" /> 1 - 39 Personas<br />\
    <img src="styles/legend/MicroregionIR12_5_1.png" /> 39 - 114 Personas<br />\
    <img src="styles/legend/MicroregionIR12_5_2.png" /> 114 - 231 Personas<br />\
    <img src="styles/legend/MicroregionIR12_5_3.png" /> 231 - 437 Personas<br />\
    <img src="styles/legend/MicroregionIR12_5_4.png" /> 437 - 662 Personas<br />'
        });
var format_MicroregionIR11_6 = new ol.format.GeoJSON();
var features_MicroregionIR11_6 = format_MicroregionIR11_6.readFeatures(json_MicroregionIR11_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionIR11_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionIR11_6.addFeatures(features_MicroregionIR11_6);
var lyr_MicroregionIR11_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionIR11_6, 
                style: style_MicroregionIR11_6,
                interactive: false,
    title: 'Microregion IR11<br />\
    <img src="styles/legend/MicroregionIR11_6_0.png" /> 1 - 32 Personas<br />\
    <img src="styles/legend/MicroregionIR11_6_1.png" /> 32 - 100 Personas<br />\
    <img src="styles/legend/MicroregionIR11_6_2.png" /> 100 - 275 Personas<br />\
    <img src="styles/legend/MicroregionIR11_6_3.png" /> 275 - 442 Personas<br />\
    <img src="styles/legend/MicroregionIR11_6_4.png" /> 442 - 596 Personas<br />'
        });
var format_MicroregionIR10N_7 = new ol.format.GeoJSON();
var features_MicroregionIR10N_7 = format_MicroregionIR10N_7.readFeatures(json_MicroregionIR10N_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionIR10N_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionIR10N_7.addFeatures(features_MicroregionIR10N_7);
var lyr_MicroregionIR10N_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionIR10N_7, 
                style: style_MicroregionIR10N_7,
                interactive: false,
    title: 'Microregion IR10-N<br />\
    <img src="styles/legend/MicroregionIR10N_7_0.png" /> 3 - 18 Personas<br />\
    <img src="styles/legend/MicroregionIR10N_7_1.png" /> 18 - 47 Personas<br />\
    <img src="styles/legend/MicroregionIR10N_7_2.png" /> 47 - 115 Personas<br />\
    <img src="styles/legend/MicroregionIR10N_7_3.png" /> 115 - 294 Personas<br />\
    <img src="styles/legend/MicroregionIR10N_7_4.png" /> 294 - 577 Personas<br />'
        });
var format_MicroregionIR09N_8 = new ol.format.GeoJSON();
var features_MicroregionIR09N_8 = format_MicroregionIR09N_8.readFeatures(json_MicroregionIR09N_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionIR09N_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionIR09N_8.addFeatures(features_MicroregionIR09N_8);
var lyr_MicroregionIR09N_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionIR09N_8, 
                style: style_MicroregionIR09N_8,
                interactive: false,
    title: 'Microregion IR09-N<br />\
    <img src="styles/legend/MicroregionIR09N_8_0.png" /> 1 - 19 Personas<br />\
    <img src="styles/legend/MicroregionIR09N_8_1.png" /> 19 - 54 Personas<br />\
    <img src="styles/legend/MicroregionIR09N_8_2.png" /> 54 - 118 Personas<br />\
    <img src="styles/legend/MicroregionIR09N_8_3.png" /> 118 - 256 Personas<br />\
    <img src="styles/legend/MicroregionIR09N_8_4.png" /> 256 - 448 Personas<br />'
        });
var format_MicroregionIR08N_9 = new ol.format.GeoJSON();
var features_MicroregionIR08N_9 = format_MicroregionIR08N_9.readFeatures(json_MicroregionIR08N_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionIR08N_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionIR08N_9.addFeatures(features_MicroregionIR08N_9);
var lyr_MicroregionIR08N_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionIR08N_9, 
                style: style_MicroregionIR08N_9,
                interactive: false,
    title: 'Microregion IR08-N<br />\
    <img src="styles/legend/MicroregionIR08N_9_0.png" /> 3 - 15 Personas<br />\
    <img src="styles/legend/MicroregionIR08N_9_1.png" /> 15 - 39 Personas<br />\
    <img src="styles/legend/MicroregionIR08N_9_2.png" /> 39 - 78 Personas<br />\
    <img src="styles/legend/MicroregionIR08N_9_3.png" /> 78 - 138 Personas<br />\
    <img src="styles/legend/MicroregionIR08N_9_4.png" /> 138 - 239 Personas<br />'
        });
var format_MicroregionIR07N_10 = new ol.format.GeoJSON();
var features_MicroregionIR07N_10 = format_MicroregionIR07N_10.readFeatures(json_MicroregionIR07N_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionIR07N_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionIR07N_10.addFeatures(features_MicroregionIR07N_10);
var lyr_MicroregionIR07N_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionIR07N_10, 
                style: style_MicroregionIR07N_10,
                interactive: false,
    title: 'Microregion IR07-N<br />\
    <img src="styles/legend/MicroregionIR07N_10_0.png" /> 3 - 14 Personas<br />\
    <img src="styles/legend/MicroregionIR07N_10_1.png" /> 14 - 32 Personas<br />\
    <img src="styles/legend/MicroregionIR07N_10_2.png" /> 32 - 55 Personas<br />\
    <img src="styles/legend/MicroregionIR07N_10_3.png" /> 55 - 97 Personas<br />\
    <img src="styles/legend/MicroregionIR07N_10_4.png" /> 97 - 139 Personas<br />'
        });
var format_MicroregionIR06N_11 = new ol.format.GeoJSON();
var features_MicroregionIR06N_11 = format_MicroregionIR06N_11.readFeatures(json_MicroregionIR06N_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionIR06N_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionIR06N_11.addFeatures(features_MicroregionIR06N_11);
var lyr_MicroregionIR06N_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionIR06N_11, 
                style: style_MicroregionIR06N_11,
                interactive: false,
    title: 'Microregion IR06-N<br />\
    <img src="styles/legend/MicroregionIR06N_11_0.png" /> 3 - 15 Personas<br />\
    <img src="styles/legend/MicroregionIR06N_11_1.png" /> 15 - 34 Personas<br />\
    <img src="styles/legend/MicroregionIR06N_11_2.png" /> 34 - 61 Personas<br />\
    <img src="styles/legend/MicroregionIR06N_11_3.png" /> 61 - 116 Personas<br />\
    <img src="styles/legend/MicroregionIR06N_11_4.png" /> 116 - 199 Personas<br />'
        });
var format_MicroregionIR05N_12 = new ol.format.GeoJSON();
var features_MicroregionIR05N_12 = format_MicroregionIR05N_12.readFeatures(json_MicroregionIR05N_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionIR05N_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionIR05N_12.addFeatures(features_MicroregionIR05N_12);
var lyr_MicroregionIR05N_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionIR05N_12, 
                style: style_MicroregionIR05N_12,
                interactive: false,
    title: 'Microregion IR05-N<br />\
    <img src="styles/legend/MicroregionIR05N_12_0.png" /> 2 - 11 Personas<br />\
    <img src="styles/legend/MicroregionIR05N_12_1.png" /> 11 - 25 Personas<br />\
    <img src="styles/legend/MicroregionIR05N_12_2.png" /> 25 - 45 Personas<br />\
    <img src="styles/legend/MicroregionIR05N_12_3.png" /> 45 - 87 Personas<br />\
    <img src="styles/legend/MicroregionIR05N_12_4.png" /> 87 - 198 Personas<br />'
        });
var format_MicroregionIR04N_13 = new ol.format.GeoJSON();
var features_MicroregionIR04N_13 = format_MicroregionIR04N_13.readFeatures(json_MicroregionIR04N_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionIR04N_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionIR04N_13.addFeatures(features_MicroregionIR04N_13);
var lyr_MicroregionIR04N_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionIR04N_13, 
                style: style_MicroregionIR04N_13,
                interactive: false,
    title: 'Microregion IR04-N<br />\
    <img src="styles/legend/MicroregionIR04N_13_0.png" /> 3 - 13 Personas<br />\
    <img src="styles/legend/MicroregionIR04N_13_1.png" /> 13 - 28 Personas<br />\
    <img src="styles/legend/MicroregionIR04N_13_2.png" /> 28 - 47 Personas<br />\
    <img src="styles/legend/MicroregionIR04N_13_3.png" /> 47 - 77 Personas<br />\
    <img src="styles/legend/MicroregionIR04N_13_4.png" /> 77 - 133 Personas<br />'
        });
var format_MicroregionIR03_14 = new ol.format.GeoJSON();
var features_MicroregionIR03_14 = format_MicroregionIR03_14.readFeatures(json_MicroregionIR03_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionIR03_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionIR03_14.addFeatures(features_MicroregionIR03_14);
var lyr_MicroregionIR03_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionIR03_14, 
                style: style_MicroregionIR03_14,
                interactive: false,
    title: 'Microregion IR03<br />\
    <img src="styles/legend/MicroregionIR03_14_0.png" /> 1 - 20 Personas<br />\
    <img src="styles/legend/MicroregionIR03_14_1.png" /> 20 - 83 Personas<br />\
    <img src="styles/legend/MicroregionIR03_14_2.png" /> 83 - 196 Personas<br />\
    <img src="styles/legend/MicroregionIR03_14_3.png" /> 196 - 393 Personas<br />\
    <img src="styles/legend/MicroregionIR03_14_4.png" /> 393 - 503 Personas<br />'
        });
var format_MicroregionIR02_15 = new ol.format.GeoJSON();
var features_MicroregionIR02_15 = format_MicroregionIR02_15.readFeatures(json_MicroregionIR02_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionIR02_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionIR02_15.addFeatures(features_MicroregionIR02_15);
var lyr_MicroregionIR02_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionIR02_15, 
                style: style_MicroregionIR02_15,
                interactive: false,
    title: 'Microregion IR02<br />\
    <img src="styles/legend/MicroregionIR02_15_0.png" /> 3 - 20 Personas<br />\
    <img src="styles/legend/MicroregionIR02_15_1.png" /> 20 - 60 Personas<br />\
    <img src="styles/legend/MicroregionIR02_15_2.png" /> 60 - 133 Personas<br />\
    <img src="styles/legend/MicroregionIR02_15_3.png" /> 133 - 357 Personas<br />\
    <img src="styles/legend/MicroregionIR02_15_4.png" /> 357 - 606 Personas<br />'
        });
var format_MicroregionIR01N_16 = new ol.format.GeoJSON();
var features_MicroregionIR01N_16 = format_MicroregionIR01N_16.readFeatures(json_MicroregionIR01N_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionIR01N_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionIR01N_16.addFeatures(features_MicroregionIR01N_16);
var lyr_MicroregionIR01N_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionIR01N_16, 
                style: style_MicroregionIR01N_16,
                interactive: false,
    title: 'Microregion IR01-N<br />\
    <img src="styles/legend/MicroregionIR01N_16_0.png" /> 3 - 17 Personas<br />\
    <img src="styles/legend/MicroregionIR01N_16_1.png" /> 17 - 34 Personas<br />\
    <img src="styles/legend/MicroregionIR01N_16_2.png" /> 34 - 55 Personas<br />\
    <img src="styles/legend/MicroregionIR01N_16_3.png" /> 55 - 86 Personas<br />\
    <img src="styles/legend/MicroregionIR01N_16_4.png" /> 86 - 149 Personas<br />'
        });
var format_CoordinacionIrapuato_17 = new ol.format.GeoJSON();
var features_CoordinacionIrapuato_17 = format_CoordinacionIrapuato_17.readFeatures(json_CoordinacionIrapuato_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionIrapuato_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionIrapuato_17.addFeatures(features_CoordinacionIrapuato_17);
var lyr_CoordinacionIrapuato_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionIrapuato_17, 
                style: style_CoordinacionIrapuato_17,
                interactive: true,
                title: '<img src="styles/legend/CoordinacionIrapuato_17.png" /> Coordinacion Irapuato'
            });
var group_CoordinacionIrapuatoRezago = new ol.layer.Group({
                                layers: [lyr_MicroregionIR12_5,lyr_MicroregionIR11_6,lyr_MicroregionIR10N_7,lyr_MicroregionIR09N_8,lyr_MicroregionIR08N_9,lyr_MicroregionIR07N_10,lyr_MicroregionIR06N_11,lyr_MicroregionIR05N_12,lyr_MicroregionIR04N_13,lyr_MicroregionIR03_14,lyr_MicroregionIR02_15,lyr_MicroregionIR01N_16,],
                                title: "Coordinacion Irapuato Rezago"});
var group_DatosEducacinMediaSuperiorySuperior = new ol.layer.Group({
                                layers: [lyr_EduacionMediaSuperiorySuperior_4,],
                                title: "Datos Educación Media Superior y Superior"});
var group_CapazSecundarias = new ol.layer.Group({
                                layers: [lyr_CoordinacionIrapuato_3,],
                                title: "Capaz Secundarias"});
var group_MapasBase = new ol.layer.Group({
                                layers: [lyr_GoogleEarth_0,lyr_GoogleSatellite_1,lyr_OpenStreetMap_2,],
                                title: "Mapas Base"});

lyr_GoogleEarth_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_CoordinacionIrapuato_3.setVisible(true);lyr_EduacionMediaSuperiorySuperior_4.setVisible(true);lyr_MicroregionIR12_5.setVisible(true);lyr_MicroregionIR11_6.setVisible(true);lyr_MicroregionIR10N_7.setVisible(true);lyr_MicroregionIR09N_8.setVisible(true);lyr_MicroregionIR08N_9.setVisible(true);lyr_MicroregionIR07N_10.setVisible(true);lyr_MicroregionIR06N_11.setVisible(true);lyr_MicroregionIR05N_12.setVisible(true);lyr_MicroregionIR04N_13.setVisible(true);lyr_MicroregionIR03_14.setVisible(true);lyr_MicroregionIR02_15.setVisible(true);lyr_MicroregionIR01N_16.setVisible(true);lyr_CoordinacionIrapuato_17.setVisible(true);
var layersList = [group_MapasBase,group_CapazSecundarias,group_DatosEducacinMediaSuperiorySuperior,group_CoordinacionIrapuatoRezago,lyr_CoordinacionIrapuato_17];
lyr_CoordinacionIrapuato_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_EduacionMediaSuperiorySuperior_4.set('fieldAliases', {'Clave CT': 'Clave CT', 'Nombre CT': 'Nombre CT', 'Cve. Local': 'Cve. Local', 'Cve. Munic': 'Cve. Munic', 'Ageb': 'Ageb', 'Longitud': 'Longitud', 'Latitud': 'Latitud', 'Nivel': 'Nivel', });
lyr_MicroregionIR12_5.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionIR11_6.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionIR10N_7.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionIR09N_8.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionIR08N_9.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', });
lyr_MicroregionIR07N_10.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', });
lyr_MicroregionIR06N_11.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', });
lyr_MicroregionIR05N_12.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionIR04N_13.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', });
lyr_MicroregionIR03_14.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionIR02_15.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionIR01N_16.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', });
lyr_CoordinacionIrapuato_17.set('fieldAliases', {'Micro': 'Micro', 'Coord': 'Coord', 'Muni': 'Muni', 'Region': 'Region', 'Analf': 'Analf', 'PrimIncom': 'PrimIncom', 'PrimComp': 'PrimComp', 'SecuComp': 'SecuComp', 'Rezago': 'Rezago', });
lyr_CoordinacionIrapuato_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_EduacionMediaSuperiorySuperior_4.set('fieldImages', {'Clave CT': 'TextEdit', 'Nombre CT': 'TextEdit', 'Cve. Local': 'TextEdit', 'Cve. Munic': 'TextEdit', 'Ageb': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', 'Nivel': 'TextEdit', });
lyr_MicroregionIR12_5.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionIR11_6.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionIR10N_7.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionIR09N_8.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionIR08N_9.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', });
lyr_MicroregionIR07N_10.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', });
lyr_MicroregionIR06N_11.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', });
lyr_MicroregionIR05N_12.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionIR04N_13.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', });
lyr_MicroregionIR03_14.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionIR02_15.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionIR01N_16.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', });
lyr_CoordinacionIrapuato_17.set('fieldImages', {'Micro': 'TextEdit', 'Coord': 'TextEdit', 'Muni': 'TextEdit', 'Region': 'TextEdit', 'Analf': 'TextEdit', 'PrimIncom': 'TextEdit', 'PrimComp': 'TextEdit', 'SecuComp': 'TextEdit', 'Rezago': 'TextEdit', });
lyr_CoordinacionIrapuato_3.set('fieldLabels', {});
lyr_EduacionMediaSuperiorySuperior_4.set('fieldLabels', {});
lyr_MicroregionIR12_5.set('fieldLabels', {});
lyr_MicroregionIR11_6.set('fieldLabels', {});
lyr_MicroregionIR10N_7.set('fieldLabels', {});
lyr_MicroregionIR09N_8.set('fieldLabels', {});
lyr_MicroregionIR08N_9.set('fieldLabels', {});
lyr_MicroregionIR07N_10.set('fieldLabels', {});
lyr_MicroregionIR06N_11.set('fieldLabels', {});
lyr_MicroregionIR05N_12.set('fieldLabels', {});
lyr_MicroregionIR04N_13.set('fieldLabels', {});
lyr_MicroregionIR03_14.set('fieldLabels', {});
lyr_MicroregionIR02_15.set('fieldLabels', {});
lyr_MicroregionIR01N_16.set('fieldLabels', {});
lyr_CoordinacionIrapuato_17.set('fieldLabels', {'Micro': 'inline label', 'Coord': 'inline label', 'Muni': 'inline label', 'Region': 'inline label', 'Analf': 'inline label', 'PrimIncom': 'inline label', 'PrimComp': 'inline label', 'SecuComp': 'inline label', 'Rezago': 'inline label', });
lyr_CoordinacionIrapuato_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});