exports.create = async (req, res) => {
    
    res.status(200).json({ status: 'success', roll:"Admin", data: 'Created Admin' });
  };
  
  exports.read = async (req, res) => {
    
    res.status(200).json({ status: 'success', roll:"Admin", data: 'Read Admin' });
  };
  
  exports.delete = async (req, res) => {
    
    res.status(200).json({ status: 'success', roll:"Admin", data: 'Deleted Admin' });
  };
  
  exports.update = async (req, res) => {
    
    res.status(200).json({ status: 'success', roll:"Admin", data: 'Updated Admin' });
  };