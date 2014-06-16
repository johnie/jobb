from __future__ import with_statement

import os.path

from fabric.api import *
from fabric.contrib.project import *

"""
Environments
"""

def dev():
  env.hosts = ['ssh.binero.se']
  env.user  = '109715_sshmaster'
  env.path  = 'priser.xramp.se/public_html/'

dev()

"""
Deployment
"""

def deploy():
  require('path', provided_by=[dev])

  extra_opts = '--omit-dir-times --no-perms'
  rsync_project(
    env.path,
    '%s' % os.path.dirname(__file__),
    ['.git', '.htaccess', '.git*', '.DS_Store', 'fabfile.py', '.sass-cache'],
    False,
    extra_opts=extra_opts,
  )
