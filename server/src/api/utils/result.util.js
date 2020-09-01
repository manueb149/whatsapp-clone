module.exports = {
    error: (req=null, res=null, status, message='') => (
        res.status(status||500).json({result: message})
    ),
    success: (req=null, res=null, status, message='') => (
        res.status(status||500).json({result: message})
    )
}