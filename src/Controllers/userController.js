exports.create = async (req, res) => {
    
    res.status(200).json({ status: 'success', roll:"User", data: 'Created user' });
  };
  
  exports.read = async (req, res) => {
    
    res.status(200).json({ status: 'success', roll:"User", data: 'Read user' });
  };
  
  exports.delete = async (req, res) => {
    
    res.status(200).json({ status: 'success', roll:"User", data: 'Deleted user' });
  };
  
  exports.update = async (req, res) => {
    
    res.status(200).json({ status: 'success', roll:"User", data: 'Updated user' });
  };
  