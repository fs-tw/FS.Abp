using FS.Abp.Npoi.Mapper.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace FS.Abp.Npoi.Mapper.Attributes
{
    public class LevelStartAtAttribute: Attribute
    {
        public LevelStartAtAttribute(ushort index)
        {
            Index = index;
        }
        //public LevelAttribute(string name)
        //{
        //    Name = name;
        //}

        public int Index { get; }
        //public string Name { get; }
    }
}