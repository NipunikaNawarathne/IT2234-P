## ✅ 1. INSERT

**Method: POST**

Body (raw > JSON): Postman

In visual studio code:

```
router.post('/',async(req,res)=>{
    try{
        const {code,name,credits,description} = req.body
        if(!code || !name || !credits){
              res.status(400).send("Please provide the required fields!")
        }else{
            const results = await Course.create({code,name,credits,description})
            res.status(200).json(results)
        }
    }catch (error){
        console.error(error);
        res.status(500).send("Sever error !")
    }
    
})
```

![insert](https://github.com/user-attachments/assets/0a29c103-e46e-4e46-9f62-a0684f22b4d2)

![inserted](https://github.com/user-attachments/assets/b1c11a96-b45a-4b69-b7fe-cca63c1ff919)

**✨ Required fields are manatory for the given outputs. Otherwise errors will occur.**

![error](https://github.com/user-attachments/assets/acd9dc0f-d719-4531-9c42-0f31292d0ca7)


## ✅ 2. UPDATE

**Method: PUT**

Body (raw > JSON):Postman

In visual studio code:

```
router.put('/:id',async(req,res)=>{
    try{
        const id = req.params.id
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).send("Invalid ID !")
        }
        const ucourse =  await Course.findById(id)
        const {code,name,credits,description} = req.body
        if(!code || !name || !credits){
              res.status(400).send("Please provide the required fields!")
        }else{
            const results = await ucourse.updateOne({code,name,credits,description})
            res.status(200).json(results)
        }
    }catch (error){
        console.error(error);
        res.status(500).send("Sever error !")
    }
    
})
```

![update](https://github.com/user-attachments/assets/18f7cfb3-5c7b-409a-8d73-4f4cf4621ac0)

![updated](https://github.com/user-attachments/assets/933bc4f4-7e84-4ff8-acf7-1d31cc564217)


## ✅ 3. DELETE

**Method: DELETE**

Body (raw > JSON):Postman

In visual studio code:

```
router.delete('/:id',async(req,res)=>{
    try{
        const id = req.params.id
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).send("Invalid ID !")
        }
        const dcourse =  await Course.findById(id)
        const {code,name,credits,description} = req.body
        const results = await dcourse.deleteOne(dcourse).catch(
            (error)=>{ return res.status(500).json(error)}
        )
        res.status(200).json(results)
        
    }catch (error){
        console.error(error);
        res.status(500).send("Sever error !")
    }
    
})
```

![delete](https://github.com/user-attachments/assets/0168e4b2-e7fc-496e-9cf5-f2330aa5dd40)

![deleted](https://github.com/user-attachments/assets/17e70bc8-06ee-44f7-a009-0277133f1f76)

## index.js

![index](https://github.com/user-attachments/assets/c61caf03-e471-4987-b34e-69be2fdf38f7)

## course.js

![course](https://github.com/user-attachments/assets/e19ecd16-6da6-4166-a842-9e0190a75579)

![01](https://github.com/user-attachments/assets/0f8a508b-5678-4347-94c0-7069c5fb38d7)

## degree.js

![02](https://github.com/user-attachments/assets/208ed58d-18df-457e-8fa2-945db317a551)

![03](https://github.com/user-attachments/assets/86840bd6-f48e-46a5-a230-5c3aaca315f9)




