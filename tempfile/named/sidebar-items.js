initSidebarItems({"struct":[["NamedTempFile","A named temporary file.This variant is *NOT* secure/reliable in the presence of a pathological temporary file cleaner.NamedTempFiles are deleted on drop. As rust doesn't guarantee that a struct will ever be dropped, these temporary files will not be deleted on abort, resource leak, early exit, etc.Please use TempFile unless you absolutely need a named file."]]});