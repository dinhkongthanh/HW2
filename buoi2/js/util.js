const util = {}
util.getDataFromDoc = (doc) => {
     const data = doc.data()
     data.id = doc.id;
     return data;
}
util.getDataFromDocs = (docs) =>{
  return docs.map(util.getDataFromDoc)
}