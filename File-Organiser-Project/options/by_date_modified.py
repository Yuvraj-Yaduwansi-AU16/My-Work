import os
import time
from main_code.code import Code
from main_code.folder_names import FolderNames


class ByDateModified(Code):
    def dateModified(path_of_file):
        os.chdir(path_of_file)
        files = os.listdir(path_of_file)

        for file in files:
            if os.path.isfile(file):
                m_time = os.path.getmtime(os.path.join(path_of_file, file))
                time_in_local_time_format = time.ctime(m_time)
                mm_yy = time_in_local_time_format[4:7]+"-" + \
                    time_in_local_time_format[20:24]
                Code.createIfNotExist(mm_yy)
                Code.move(mm_yy, file)
                if mm_yy not in FolderNames.folders_for_date_modified:
                    FolderNames.folders_for_date_modified.append(mm_yy)
        for file in files:
            if os.path.isdir(file) and \
                 file not in FolderNames.folders_for_date_modified:
                paths = os.path.join(path_of_file, file)
                ByDateModified.dateModified(paths)
                os.chdir(path_of_file)
