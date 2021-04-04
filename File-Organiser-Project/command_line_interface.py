from choices import Choices
import sys
import argparse


def select(args):
    Choices.find(args.o, args.p)
    return "Organizing Complete. Enjoy your Organised Files"


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument('--p', type=str, default=None, help='Path')
    parser.add_argument('--o', type=str, default=None, help='Method for Organizing \
        - Write Type for Organizing via Type , Size to organize via size,\
        Date-Modified to organize via this method and Recently-Used to\
        organize via this method ')
    args = parser.parse_args()
    sys.stdout.write(str(select(args)))
