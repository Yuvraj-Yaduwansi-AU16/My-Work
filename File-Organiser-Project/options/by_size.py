import os
from main_code.code import Code
from main_code.folder_names import FolderNames


class BySize(Code):
    def bySizeCode(path_of_file):
        os.chdir(path_of_file)

        files = os.listdir()

        for file in files:
            if os.path.isfile(file):
                size = os.stat(file).st_size
                if file in FolderNames.my_code_files or file.endswith(".pyc"):
                    continue
                elif size < 1024:
                    Code.createIfNotExist(FolderNames.size_chart[0])
                    Code.move(FolderNames.size_chart[0], file)

                elif size >= 1024 and size < 1048576:
                    Code.createIfNotExist(FolderNames.size_chart[1])
                    Code.move(FolderNames.size_chart[1], file)

                elif size >= 1048576 and size < 1073741824:
                    Code.createIfNotExist(FolderNames.size_chart[2])
                    Code.move(FolderNames.size_chart[2], file)

                elif size > 1073741824:
                    Code.createIfNotExist(FolderNames.size_chart[3])
                    Code.move(FolderNames.size_chart[3], file)

        for file in files:
            if os.path.isdir(file) and file not in FolderNames.size_chart:
                paths = os.path.join(path_of_file, file)
                BySize.bySizeCode(paths)
                os.chdir(path_of_file)
