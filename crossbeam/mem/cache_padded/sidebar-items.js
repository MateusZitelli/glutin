initSidebarItems({"struct":[["CachePadded","Pad `T` to the length of a cacheline.Sometimes concurrent programming requires a piece of data to be padded out to the size of a cacheline to avoid \"false sharing\": cachelines being invalidated due to unrelated concurrent activity. Use the `CachePadded` type when you want to *avoid* cache locality.At the moment, cache lines are assumed to be 32 * sizeof(usize) on all architectures.**Warning**: the wrapped data is never dropped; move out using `ptr::read` if you need to run dtors."]],"trait":[["ZerosValid","Types for which mem::zeroed() is safe.If a type `T: ZerosValid`, then a sequence of zeros the size of `T` must be a valid member of the type `T`."]]});