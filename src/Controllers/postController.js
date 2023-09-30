exports.create = async (req, res) => {
    
    res.status(200).json({ status: 'success', data: 'Created post' });
  };
  
  exports.read = async (req, res) => {
    
    res.status(200).json({ status: 'success', data: 'Read post' });
  };
  
  exports.delete = async (req, res) => {
    
    res.status(200).json({ status: 'success', data: 'Deleted post' });
  };
  
  exports.update = async (req, res) => {
    
    res.status(200).json({ status: 'success', data: 'Updated post' });
  };