import jsonpatch from 'json-patch';

const patchObjects = (req, res) => {
  console.log(req.body.obj);
  const myobj = req.body.obj;
  const patches = req.body.patch;
  jsonpatch.apply(myobj, patches);
  res.status(200);
  res.json({
    done: true,
    error: false,
    data: myobj,
  });
};

export default patchObjects;
