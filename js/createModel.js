AFRAME.registerComponent("city", {
    init:async function(){
        var models=await this.getmodels()
        //   console.log(models)
  
        var barcodes=Object.keys(models)
        console.log(barcodes)
  
        barcodes.map(i=>{
            var model=models[i]
            console.log(model)
            this.createmodel(model)
        })
      
  
    },
    
    getmodels:function(){
        return fetch("js/model.json")
        .then(response=>response.json())
        .then(data=>data)
    },
  
    createmodel:async function(element){
      var model=model.model_name
      var barCodeValue=model.barcode_value
      var modelUrl=model.model_url
  
      var scene=document.querySelector("a-scene")
  
      var marker=document.createElement("a-marker")

      marker.setAttribute("id",`marker-${barCodeValue}`)
      marker.setAttribute("type","barcode")
      marker.setAttribute("model_name",model)
      marker.setAttribute("value",barCodeValue)
      marker.setAttribute("markerhandler",{})
      scene.appendChild(marker)
  
      if(barCodeValue===0){
        var modelEl=document.createElement("a-entity")
        modelEl.setAttribute("id",`${modelName}`)
        model.setAttribute("geometry",{
            primitive:"box",
            width:model.width,
            height:model.height
        })
        modelEl.setAttribute("position",model.position)
        model.setAttribute("rotation",model.rotation)
        model.setAttribute("material",{
            color:model.color
        })
        marker.appendChild(modelEl)
      }

      else{
          var modelEl=document.createElement("a-entity")
          modelEl.setAttribute("id",`${modelName}`)
          modelEl.setAttribute("gltf-model",`url(${modelUrl})`)
          modelEl.setAttribute("scale",model.scale)
          modelEl.setAttribute("position",model.position)
          modelEl.setAttribute("rotation",model.rotation)
          marker.appendChild(modelEl)
      }
    }
  });
  