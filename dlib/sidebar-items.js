initSidebarItems({"enum":[["DlError",""]],"macro":[["dlopen_external_library!",""],["external_library!",""],["ffi_dispatch!",""],["ffi_dispatch_static!",""],["link_external_library!",""]],"struct":[["Library","A dynamically loaded library."],["Symbol","Symbol from a library.This type is a safeguard against using dynamically loaded symbols after a `Library` is unloaded. Primary method to create an instance of a `Symbol` is via `Library::get`.Due to implementation of the `Deref` trait, an instance of `Symbol` may be used as if it was a function or variable directly, without taking care to “extract” function or variable manually most of the time.Examples"]]});